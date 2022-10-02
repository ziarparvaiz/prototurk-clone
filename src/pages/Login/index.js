import React from "react";
import "./Login.scss";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <NavLink to="/" className="Login__Logo">
        <img src={require("../../static/prototurk.png")} alt="Logo" />
        <h2>PROTOTURK</h2>
      </NavLink>
      <form className="Login__Form">
        <h3>Sign in to your account</h3>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <Button title="CONTINUE" type="success" />
      </form>
      <div className="Login__JoinNow">
        <span>Don’t have an account?</span>
        <NavLink to="/join-now">
          <Button title="JOIN NOW" type="light" />
        </NavLink>
      </div>
      <div className="Login__Footer">
        <NavLink to="/">© Prototurk</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/terms-of-service">Terms of Service</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </div>
    </div>
  );
}

export default Login;
