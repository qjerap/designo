import React from "react";
import "./about.scss";

import svgPassionate from "./assets/illustration-passionate.svg";
import svgFriendly from "./assets/illustration-friendly.svg";
import svgResourceful from "./assets/illustration-resourceful.svg";

const About = () => {
  return (
    <section className="about wrapper wrapper--phonepad">
      <div className="about__card">
        <div className="about__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern--r270"></div>
          <img src={svgPassionate} alt="" srcset="" />
        </div>
        <div className="about__card__content">
          <h3 className="about__card__title">passionate</h3>
          <p className="about__card__description">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern--r180"></div>
          <img src={svgResourceful} alt="" srcset="" />
        </div>
        <div className="about__card__content">
          <h3 className="about__card__title">resourceful</h3>
          <p className="about__card__description">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__thumbnail">
          <div className="thumbnail__svgPattern thumbnail__svgPattern--r90"></div>
          <img src={svgFriendly} alt="" srcset="" />
        </div>
        <div className="about__card__content">
          <h3 className="about__card__title">friendly</h3>
          <p className="about__card__description">
            {" "}
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
