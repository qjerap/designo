import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "./assets/logo-dark.png";

const Header = () => {
  // trigger mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // set IsOpen to FALSE when changing page
  useEffect(() => {
    setIsOpen(false);
  }, [useLocation().pathname]);

  return (
    <React.Fragment>
      <header className=" wrapper wrapper--phonepad">
        <div className="header">
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

          {!isOpen ? (
            <div
              onClick={() => setIsOpen(true)}
              className="header__burger header__burger--open"
            ></div>
          ) : (
            <div
              onClick={() => setIsOpen(false)}
              className="header__burger header__burger--close"
            ></div>
          )}
        </div>
      </header>

      <div className={isOpen ? "mobile__nav mobile__nav--open" : "mobile__nav"}>
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
      </div>
    </React.Fragment>
  );
};

export default Header;
