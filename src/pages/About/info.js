import React from "react";
import "./info.scss";

const Info = ({ title, text1, text2, classN }) => {
  return (
    <section className={`about__info ${classN}`}>
      <div className="about__info__content-container">
        <div className="about__info__content">
          <h2>{title}</h2>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
      <div className="about__info__image"></div>
    </section>
  );
};

export default Info;
