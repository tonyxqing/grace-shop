import React, { useState } from "react";
import GraceShopLogo from "./assets/graceshop.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { SignIntoAccount } from "./firebase";
import { Password } from "@mui/icons-material";
import RegisterForm from "./RegisterForm";
function Registration() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src={GraceShopLogo}
          alt="grace shop logo"
          className="login__logo"
        />
      </Link>
      <RegisterForm />
    </div>
  );
}

export default Registration;
