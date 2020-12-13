import React from 'react';
import "./portfolioCard.scss"

const PortfolioCard = (props) => {
    return (
        <div className="portfolio__card">
            <div className="portfolio__card__thumbnail">
                <img src={props.img} alt="" srcset=""/>
            </div>
            <div className="portfolio__card__content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        
        </div>
    )
}

export default PortfolioCard;