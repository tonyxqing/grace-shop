import React from "react";
import Logo from "./assets/graceshop.png";
import "./Header.css";
import { useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, Outlet } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Cart } from "./types";

function Header() {
  const theme = useTheme();
  const [state, dispatch] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/signin">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/history">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/account">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Account</span>
          </div>
        </Link>
        <Link to="/checkout">
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
    </nav>
  );
}

export default Header;
