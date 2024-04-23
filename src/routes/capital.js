const router = require("express").Router();

// db setup (will need to change for deployment)
const pool = require("../../db/dbconfig.js");
const cron = require("node-cron");

// Get a random capital
// TEST CODE - NOT USED IN DEPLOYMENT - USED FOR TESTING PURPOSES
router.get("/", async (req, res) => {
  try {
    const randomCapital = await pool.query(
      "SELECT * FROM countries WHERE picked = false ORDER BY RANDOM() LIMIT 1"
    );
    res.json(randomCapital.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// List all capitals
router.get("/all", async (req, res) => {
  try {
    const allCapitals = await pool.query("SELECT * FROM countries");
    res.json(allCapitals.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get a capital assigned todays date under 'challenge_date'
// DEPLOYMENT CODE - USED IN DEPLOYMENT
router.get("/today", async (req, res) => {
  try {
    const todayCapital = await pool.query(
      "SELECT * FROM countries WHERE challenge_date = CURRENT_DATE"
    );
    res.json(todayCapital.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Once a user has guessed the capital correctly, update the 'quiz_completed_today' column to true in the users table
router.put("/quizCompleted", async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);
    const quizCompleted = await pool.query(
      "UPDATE users SET quiz_completed_today = true WHERE username = $1",
      [user.username]
    );
    res.json("Quiz completed");
  } catch (error) {
    console.error(error.message);
  }
});

// At midnight, reset the 'quiz_completed_today' column to false in the users table
// ...

// At midnight, reset the 'quiz_completed_today' column to false in the users table
cron.schedule("0 0 * * *", async () => {
  try {
    const resetQuiz = await pool.query(
      "UPDATE users SET quiz_completed_today = false"
    );
    console.log("Quiz reset");
  } catch (error) {
    console.error(error.message);
  }
});

// increment the streak column in the users table by 1
router.put("/incrementStreak", async (req, res) => {
  try {
    const { user } = req.body;
    const incrementStreak = await pool.query(
      "UPDATE users SET streak = streak + 1 WHERE username = $1",
      [user.username]
    );
    res.json("Streak incremented");
  } catch (error) {
    console.error(error.message);
  }
});

// reset the streak column in the users table to 0
router.put("/resetStreak", async (req, res) => {
  try {
    const { user } = req.body;
    const resetStreak = await pool.query(
      "UPDATE users SET streak = 0 WHERE username = $1",
      [user.username]
    );
    res.json("Streak reset");
  } catch (error) {
    console.error(error.message);
  }
});

// update best streak column in the users table if the current streak is greater than the best streak
router.put("/updateBestStreak", async (req, res) => {
  try {
    const { user } = req.body;
    const updateBestStreak = await pool.query(
      "UPDATE users SET best_streak = streak WHERE username = $1",
      [user.username]
    );
    res.json("Best streak updated");
  } catch (error) {
    console.error(error.message);
  }
});

// check to see if the user has completed the quiz today by checking the 'quiz_completed_today' column if it is
// true they have completed the quiz, if it is false they have not
router.get("/checkQuiz", async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);
    const checkQuiz = await pool.query(
      "SELECT quiz_completed_today FROM users WHERE username = $1",
      [user.username]
    );
    res.json(checkQuiz.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
