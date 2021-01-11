import React from "react";
import "./hero.scss";
import bgCircleShape from "./assets/desktop/bg-pattern-hero-home.svg";
import bgPhoneImg from "./assets/desktop/image-hero-phone.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section className="hero">
        <div className="hero__background">
          <img src={bgCircleShape} alt="" className="bgCircleShape" />
        </div>
  
        <div className="hero__content-container">
          <div className="hero__content">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about services.
            </p>
            <Link to="/about">
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
        <div className="hero__image-container">
          <img src={bgPhoneImg} alt="" className="bgPhoneImg" />
        </div>
      </section>

  );
};

export default Hero;
