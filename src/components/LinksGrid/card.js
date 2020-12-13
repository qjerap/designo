import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import IconRightArrow from "./assets/icon-right-arrow.svg";

const Card = (props) => {
  return (
    //   TODO - ADD ONCLICK LINK EVENT
    //   ADD srcset and mobile size img
    <div className={`card ${props.placement ? props.placement : ""}`}>
      <Link to={props.text.split(' ').join('')}>
        <div className="card__content">
          <div className={`${props.img}`}></div>
          <h2 className="card__title">{props.text}</h2>
          <div className="card__view-projects">
            <h3 className="card__link">view projects</h3>
            <img src={IconRightArrow} alt="" className="card__arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
