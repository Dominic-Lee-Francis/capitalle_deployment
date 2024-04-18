import "./Login.css";
import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const google = () => {
    window.open(`/auth/google`, "_self");
  };
  const github = () => {
    window.open(`/auth/github`, "_self");
  };

  const [user, setUser] = useState(null); // { username: "", password: "" }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/login`, {
        username,
        password,
      });
      setUser(response.data);
      // Store user data in a cookie or local storage
      // Example using cookies:
      document.cookie = `user=${JSON.stringify(response.data)}; path=/`;
      // Example using local storage:
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const token = localStorage.getItem("user");

  useEffect(() => {
    if (token) {
      setUser(jwt_decode(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="login">
      <h1 className="loginTitle">
        Choose a Login Method
        {user && <div>Welcome, {user.username}!</div>}
      </h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            Github
          </div>
        </div>
        <div className="centre">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form className="right" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="username"
            className="loginInput"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="loginInput"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
