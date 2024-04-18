const router = require("express").Router();
// bcrypt - password hashing function
const bcrypt = require("bcrypt");
// jwt - JSON Web Token implementation
const jwt = require("jsonwebtoken");

// db setup (will need to change for deployment)
const pool = require("../../db/dbconfig.js");

// dotenv
const dotenv = require("dotenv");
dotenv.config();
const JWT_TOP_SECRET_ACCESS_KEY = process.env.JWT_TOP_SECRET_ACCESS_KEY;
const JWT_TOP_SECRET_REFRESH_KEY = process.env.JWT_TOP_SECRET_REFRESH_KEY;

// refresh tokens - used for generating new access tokens when the current one expires - temporary solution
let refreshTokens = [];

// REFRESH TOKEN
router.post("/refresh", (req, res) => {
  // Get the refresh token from the user
  const refreshToken = req.body.token;

  // Check if the refresh token is valid
  if (!refreshToken) return res.status(401).json("You are not authenticated");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  // Verify the refresh token
  jwt.verify(refreshToken, JWT_TOP_SECRET_REFRESH_KEY, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    // Generate new access token
    const newAccessToken = generateAccessToken({ username: user.username });
    const newRefreshToken = generateRefreshToken({ username: user.username });

    // Add the new refresh token to the refresh tokens array
    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

// Generate JWT access token
const generateAccessToken = (user) => {
  return jwt.sign(
    { username: user.username },
    process.env.JWT_TOP_SECRET_ACCESS_KEY,
    {
      expiresIn: "5m", // 5 minutes
    }
  );
};

// Generate JWT refresh token
const generateRefreshToken = (user) => {
  return jwt.sign(
    { username: user.username },
    process.env.JWT_TOP_SECRET_REFRESH_KEY
  );
};

// LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
    (error, results) => {
      if (error) {
        throw error;
      }
      const user = results.rows[0];
      if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            // Generate JWT access token
            const accessToken = generateAccessToken(user);
            // Generate JWT refresh token
            const refreshToken = generateRefreshToken(user);
            refreshTokens.push(refreshToken);
            // Send the user data and tokens to the client - these will be stored in the local storage
            res.json({
              id: user.id,
              username: user.username,
              streak: user.streak,
              best: user.best,
              quiz_completed_today: user.quiz_completed_today,
              accessToken,
              refreshToken,
            });
          } else {
            res.status(401).send("Username or password incorrect!");
          }
        });
      }
    }
  );
});

// VERIFY JWT - done by checking the Authorization header for a token and verifying it with the JWT_TOP_SECRET_ACCESS_KEY
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_TOP_SECRET_ACCESS_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "You failed to authenticate" });
  }
};

// LOGOUT
// This route is used to log the user out by removing the refresh token from the refreshTokens array
router.post("/logout", verifyJWT, (req, res) => {
  console.log("logout");
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.clearCookie("user_session");
  res.status(200).json("You logged out successfully");
});

// GET USER BY ID - used for testing purposes
router.get("/user/:id", verifyJWT, (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// GET USER BY USERNAME - used for testing purposes
router.get("/api/users/me", verifyJWT, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
