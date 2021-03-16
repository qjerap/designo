import React from "react";
import "./contact.scss";
import Locations from "../../components/Locations";
import Form from "./form";
import Animation from "../../tool/Animation";

const Contact = () => {
  return (
    <Animation>
      <section className="page__contact wrapper">
        <Form />
        <Locations />
      </section>
    </Animation>
  );
};

export default Contact;
