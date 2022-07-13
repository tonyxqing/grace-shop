import React, {useState} from "react";
import Logo from "./assets/graceshop.png";
import "./Header.css";
import {useTheme, Menu, MenuItem} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useSnackbar} from "notistack";

function Header() {
  const navigate = useNavigate();
  const path = useLocation();
  const theme = useTheme();
  const [state, dispatch] = useStateValue();
  const auth = getAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    console.log("authChanged");
    onAuthStateChanged(auth, (auth) => {
      if (auth) {
        // user logged in or was logged in
        console.log(auth);
        dispatch({type: "ADD_USER", item: auth});
      } else {
        // user is logged out
        dispatch({type: "ADD_USER", item: null});
      }
    });
  }, []);

  const noHeaderPaths = ["/login", "/register"];
  return noHeaderPaths.includes(path.pathname) ? null : (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {state.user ? (
          <div className="header__link" onClick={handleClick}>
            <span className="header__optionLineOne">{state.user.email}</span>
            <span className="header__optionLineTwo">Sign Out</span>
          </div>
        ) : (
          <Link className="header__link" to="/login">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </Link>
        )}

        <Link className="header__link" to="/history">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </Link>
        <Link className="header__link" to="/account">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </Link>
        <Link className="header__linkBasket" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasketIcon"></ShoppingBasketIcon>
            <span className="header__optionBasketCount">
              {Object.values(state.cart).reduce((prev: number, cur: any) => {
                return cur.quantity + prev;
              }, 0)}
            </span>
          </div>
        </Link>
      </div>
      <Menu
        className="header__accountMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          className="header__accountMenuItem"
          onClick={() => {
            navigate("/");
            handleClose();
          }}
        >
          Home
        </MenuItem>

        <MenuItem
          className="header__accountMenuItem"
          onClick={() => {
            navigate("/account");
            handleClose();
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          className="header__accountMenuItem"
          onClick={() => {
            signOut(auth);
            enqueueSnackbar("Logged out of " + state.user?.email);
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Header;
