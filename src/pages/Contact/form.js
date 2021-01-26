import React from "react";
import Button from "../../components/Button"
import "./form.scss";

const Form = () => {
  return (
    <div className="about__hero about__hero--flex-reverse">
      <div className="about__hero__content-container">
        <div className="about__hero__content">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
      </div>
      <div className="contact__form">
        <form action="#" id="contact">
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email Address" required/>
            <input type="phone" placeholder="Phone"/>
            <textarea cols="30" rows="7" placeholder="Your Message" required></textarea>
        </form>
        <Button text="submit" />
      </div>
    </div>
  );
};

export default Form;
