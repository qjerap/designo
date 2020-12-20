import React from "react";
import "./locations.scss";
import FindUs from "./findUs";

const Locations = () => {
  return (
    <section className="page__locations wrapper">
      <FindUs loc="canada" />
      <FindUs loc="australia" />
      <FindUs loc="uk" />
    </section>
  );
};

export default Locations;
