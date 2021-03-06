import React from "react";
import Hero from "./hero";
import About from "./about";
import LinksGrid from "../../components/LinksGrid";
import Card from "../../components/LinksGrid/card";
import Animation from "../../tool/Animation";

const Home = () => {
  return (
    <Animation>
      <div className="bgLeaf500"></div>
      <div className="home wrapper">
        <Hero />
        <LinksGrid>
          <Card text="web design" placement="big" img="bg-web-design" />
          <Card text="app design" img="bg-app-design" />
          <Card text="graphic design" img="bg-graphic-design" />
        </LinksGrid>
        <About />
      </div>
    </Animation>
  );
};

export default Home;
