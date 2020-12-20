import React from "react";
import "./contact.scss";
import Locations from "../../components/Locations";
import Form from "./form";

const Contact = () => {
  return (
    <section className="page__contact wrapper">
      <Form />
      <Locations />
    </section>
  );
};

export default Contact;
