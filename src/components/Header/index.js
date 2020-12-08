import React from "react";
import ThemeToggle from "../Toggle/theme";
import LangToggle from "../Toggle/lang";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <ThemeToggle />
      <LangToggle/>
    </header>
  );
};

export default Header;
