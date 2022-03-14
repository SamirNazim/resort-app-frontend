import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="login-section">
      <div className="container">
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-control">
          <button className="register-btn" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
