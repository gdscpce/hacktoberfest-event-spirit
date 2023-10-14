import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  //function to handle submit button
  const handleSubmit = () => {
    var { uname, pass } = document.forms[0];
    console, log(uname, pass);
  };

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Login</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                placeholder="password"
                name="pass"
                required
              />
              <Link>Forgot password ?</Link>
            </div>
            <button className="btn">Login</button>
            <span>
              <span>Don't have an account ? </span>{" "}
              <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
