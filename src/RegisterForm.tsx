import React, { useState } from "react";
import { RegisterAccount } from "./firebase";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import "./RegisterForm.css";
function RegisterForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const register = (e: any) => {
    e.preventDefault();
    RegisterAccount(email, password, navigate, enqueueSnackbar);
    // fancy firebase login
  };

  return (
    <div className="registerform">
      <div className="registerform__header">
        <h1>Create an Account</h1>
        <Link to="/login">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </div>
      <form>
        <h5>First Name:</h5>
        <input
          type="text"
          value={first}
          onChange={(e: any) => {
            setFirst(e.target.value);
          }}
        />
        <h5>Last Name:</h5>
        <input
          type="text"
          value={last}
          onChange={(e: any) => {
            setLast(e.target.value);
          }}
        />{" "}
        <h5>E-mail:</h5>
        <input
          type="text"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <h5>Password:</h5>
        <input
          type="text"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <button type="submit" onClick={register}>
          Create Account
        </button>
      </form>
      <p>
        By creating an account you agree to the Grace Shop conditions of use and
        sale. Please see our Privacy notice, our Cookies notice, and our
        Interesed-based ads notice
      </p>
    </div>
  );
}

export default RegisterForm;
