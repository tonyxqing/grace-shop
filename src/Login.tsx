import React, {useState} from "react";
import GraceShopLogo from "./assets/graceshop.png";
import {Link} from "react-router-dom";
import "./Login.css";
import {SignIntoAccount} from "./firebase";
import {Password} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
function Login() {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e: any) => {
    e.preventDefault();
    SignIntoAccount(email, password, navigate, enqueueSnackbar);
    // fancy firebase login
  };

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src={GraceShopLogo}
          alt="grace shop logo"
          className="login__logo"
        />
      </Link>
      <div className="login__form">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="text"
            placeholder="jon.smith@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          <h5>Password:</h5>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" onClick={signIn} className="login__formButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the Grace Shop conditions of use and sale.
          Please see our Privacy notice, our Cookies notice, and our
          Interesed-based ads notice
        </p>
        <Link to="/register">
          <button className="login__registerButton">Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
