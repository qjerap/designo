import React from "react";
import { useLocation } from "react-router-dom";
import data from "./data";
import "./designhero.scss";

const DesignHero = () => {
  const location = useLocation();
  let getData = () => {
    if (location.pathname === "/webdesign") return data.web;
    if (location.pathname === "/appdesign") return data.app;
    if (location.pathname === "/graphicdesign") return data.graphic;
  };

  return (
    <div className={`design-hero ` + "design-hero--" + getData().class}>
      <div className="design-hero__content">
        <h1>{getData().title}</h1>
        <p>{getData().description}</p>
      </div>
    </div>
  );
};

export default DesignHero;
