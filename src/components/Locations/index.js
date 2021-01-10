import React from "react";
import Button from "../Button";
import SvgCanada from "./assets/illustration-canada.svg";
import SvgAustralia from "./assets/illustration-australia.svg";
import SvgUnitedKingdom from "./assets/illustration-united-kingdom.svg";
import { Link } from "react-router-dom";

import "./locations.scss";


const Locations = () => {
  return (
    <section className="locations wrapper wrapper-phonepad">
      <div className="locations__card">
        <div className="locations__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern--r90"></div>

            <img src={SvgCanada} alt="" />
        </div>
        <div className="locations__card__content">
          <h3 className="locations__card__country">CANADA</h3>
          <Link to="/locations#Canada">
            <Button type="button button--on-light" text="see location" />
          </Link>
        </div>
      </div>

      <div className="locations__card">
        <div className="locations__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern"></div>
          <img src={SvgAustralia} alt="" />
        </div>
        <div className="locations__card__content">
          <h3 className="locations__card__country">AUSTRALIA</h3>
          <Link to="/locations#Australia">
            <Button type="button button--on-light" text="see location" />
          </Link>
        </div>
      </div>
      <div className="locations__card">
        <div className="locations__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern--r270"></div>
          <img src={SvgUnitedKingdom} alt="" />
        </div>
        <div className="locations__card__content">
          <h3 className="locations__card__country">UNITED KINGDOM</h3>
          <Link to="/locations#UnitedKingdom">
            <Button type="button button--on-light" text="see location" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
