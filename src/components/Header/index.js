import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "./assets/logo-dark.png";

const Header = () => {
  return (
    <header className=" wrapper wrapper--phonepad header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" srcset="" />
        </Link>
      </div>

      <ul className="header__links">
        <li className="header__link">
          <Link to="/about">our company</Link>
        </li>
        <li className="header__link">
          <Link to="/locations">locations</Link>
        </li>
        <li className="header__link">
          <Link to="/contact">contact</Link>
        </li>
      </ul>

      <div className="header__burger">
          
      </div>


    </header>
  );
};

export default Header;
