import React from "react";
import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  //function to handle submit button
  const handleSubmit = () => {
    // var { uname, email, pass } = document.forms[0];
    // console.log(uname.value, email.value, pass.value);
  };

  return (
    <div className="signup">
      <div className="signup-form">
        {/* <span className="title">Sign up </span> */}
        <div className="title">Sign up</div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="text" placeholder="Username" name="uname" required />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="password"
                name="pass"
                required
              />
            </div>
            <span>
              <span>Already have an account ? </span>
              <Link to={"/login"}>Login</Link>
            </span>
            <button className="btn-signup">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
