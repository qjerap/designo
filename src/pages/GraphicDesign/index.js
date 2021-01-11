import React from "react";
import DesignHero from "../../components/DesignHero";
import LinksGrid from "../../components/LinksGrid";
import Card from "../../components/LinksGrid/card";

// PORTFOLIO FLEXBOX
import Portfolio from "../../components/Portfolio";
import PortfolioCard from "../../components/Portfolio/portfolioCard";
import fetchData from "./data";

const fetchedData = [...fetchData()];

const GraphicDesign = () => {
  return (
    <React.Fragment>
      <div className="bgLeaf"></div>
      <div className="web-design wrapper">
        <DesignHero />
        <Portfolio>
          {fetchedData.map((data) => {
            return (
              <PortfolioCard
                key={data.title}
                img={data.image}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </Portfolio>
        <LinksGrid>
          <Card text="app design" img="bg-app-design" />
          <Card text="web design" img="bg-web-design" />
        </LinksGrid>
      </div>
    </React.Fragment>
  );
};

export default GraphicDesign;
