import "./Register.css";

import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState([]);

  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, email, password, password2, errors };
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.errors) {
        setErrors(data.errors);
      } else {
        console.log(response);
        console.log(body);
        window.location = "/login";
        alert("Account created successfully, please login.");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">Create an Account</h1>
      <div className="wrapper">
        <form className="centre" onSubmit={onSubmitForm}>
          <ul className="errorList">
            {errors.map((error) => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Username"
            className="registerInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            className="registerInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="registerInput"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button className="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
