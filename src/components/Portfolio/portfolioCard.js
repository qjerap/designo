import React, { Suspense } from "react";
import "./portfolioCard.scss";
import SuspenseImg from "../../tool/SuspenseImg";

const PortfolioCard = (props) => {
  return (
    <div className="portfolio__card">
      <div className="portfolio__card__thumbnail">

        <Suspense fallback={<div className="suspense-placeholder2"></div>}>
          <SuspenseImg src={props.img} />
        </Suspense>

      </div>
      <div className="portfolio__card__content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
