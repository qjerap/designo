import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="about__hero">
      <div className="about__hero__content-container">
        <div className="about__hero__content">
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="about__hero__image"></div>
    </div>
  );
};

export default Hero;
