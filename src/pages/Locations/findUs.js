import React from "react";
import "./findUs.scss";

import ImgCanada from "./assets/desktop/image-map-canada.png";
import ImgAustralia from "./assets/desktop/image-map-australia.png";
import ImgUnitedKingdom from "./assets/desktop/image-map-united-kingdom.png";

const data = {
  canada: {
    img: ImgCanada,
    country: "Canada",
    loc1: "Designo Central Office",
    loc2: "3886 Wellington Street",
    loc3: "Toronto, Ontario M9C 3J5",
    contact1: "Contact",
    contact2: "P : +1 253-863-8967",
    contact3: "M : contact@designo.co",
  },
  australia: {
    img: ImgAustralia,
    country: "Australia",
    loc1: "Designo Central Office",
    loc2: "3886 Wellington Street",
    loc3: "Toronto, Ontario M9C 3J5",
    contact1: "Contact",
    contact2: "P : +1 253-863-8967",
    contact3: "M : contact@designo.co",
  },
  uk: {
    img: ImgUnitedKingdom,
    country: "United Kingdom",
    loc1: "Designo Central Office",
    loc2: "3886 Wellington Street",
    loc3: "Toronto, Ontario M9C 3J5",
    contact1: "Contact",
    contact2: "P : +1 253-863-8967",
    contact3: "M : contact@designo.co",
  },
};

const FindUs = ({ loc }) => {
  const { img, country, loc1, loc2, loc3, contact1, contact2, contact3 } = data[
    loc
  ];
  return (
    <div id="canada" className="find-us wrapper">
      <div className="find-us__info">
        <h1 className="find-us__info__country">{country}</h1>
        <div className="find-us__info__address">
          <ul>
            <li>{loc1}</li>
            <li>{loc2}</li>
            <li>{loc3}</li>
          </ul>
          <ul>
            <li>{contact1}</li>
            <li>{contact2}</li>
            <li>{contact3}</li>
          </ul>
        </div>
      </div>
      <div className="find-us__map">
        <img src={img} alt={`our location in ${country}`} />
      </div>
    </div>
  );
};

export default FindUs;
