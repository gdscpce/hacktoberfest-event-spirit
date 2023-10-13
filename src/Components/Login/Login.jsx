import React from 'react'
import { useState } from 'react';
import './Login.css'


const Login = () => {

    const handleSubmit = () => {
      var { uname, pass } = document.forms[0];
    //   alert(uname.value)
    };

    return (
      <div className="login">
        <div className="login-form">
          <div className="title">Login</div>
          <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
        </div>
      </div>
    );
}

export default Login