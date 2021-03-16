import React from "react";
import "./locations.scss";
import FindUs from "./findUs";
import Animation from "../../tool/Animation";

const Locations = () => {
  return (
    <Animation>
      <section className="page__locations wrapper">
        <FindUs loc="canada"/>
        <FindUs loc="australia" />
        <FindUs loc="uk" />
      </section>
    </Animation>
  );
};

export default Locations;
