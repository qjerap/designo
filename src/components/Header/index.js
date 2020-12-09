import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "./assets/logo-dark.png";

const Header = () => {
  return (
    <header className=" wrapper wrapper--phonepad header">
      <div className="header__logo">
        <img src={logo} alt="logo" srcset="" />
      </div>
      <ul className="header__links">
        <li className="header__link">
          <Link to="#">our company</Link>
        </li>
        <li className="header__link">
          <Link to="#">locations</Link>
        </li>
        <li className="header__link">
          <Link to="#">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
