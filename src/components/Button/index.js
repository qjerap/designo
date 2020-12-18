import React from "react";
import "./button.scss";

const Button = ({ type = "button", text }) => {
  return <button className={type}>{text}</button>;
};

export default Button;
