import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./a_logo2.png";
import { auth } from "./firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">

      <Link to="/">

          <img
          className="header__logo"
          src={logo}
          alt=""/>

      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">

              <span className="header__optionLine">
                <p>{user?.email}</p>
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
        </Link>

        <div className="header__option">

          <span className="header__optionLine">
            Orders
          </span>
        </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>

      </div>
      <hr />

    </div>
  );
}

export default Header;
