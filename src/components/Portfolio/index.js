import React from "react";
import "./portfolio.scss"

const Portfolio = (props) => {
  return (
      <section className="portfolio wrapper wrapper--phonepad">
        {props.children}
      </section>
  );
};

export default Portfolio;
