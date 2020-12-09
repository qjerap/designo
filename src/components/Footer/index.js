import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./footer.scss";
import logo from "./assets/logo-light.png";
import iconYoutube from "./assets/icon-youtube.svg";
import iconFacebook from "./assets/icon-facebook.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconPinterest from "./assets/icon-pinterest.svg";
import iconInstagram from "./assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer footer__container">
      <div className="wrapper wrapper--phonepad">
        <div className="footer__content">
          <div className="footer__get-in-touch">
            <div>
              <h2>Let's talk about your project</h2>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <div>
              <Button text="get in touch" />
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__info__top">
              <div className="header__logo">
                <img src={logo} alt="logo" srcset="" />
              </div>
              <ul className="header__links">
                <li className="header__link">
                  <Link to="#">our company</Link>
                </li>
                <li className="header__link">
                  <Link to="#">locations</Link>
                </li>
                <li className="header__link">
                  <Link to="#">contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer__info__bottom">
              <div>
                <p>Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario, M9C 3J5</p>
              </div>
              <div>
                <p>Contact Us (Central Office)</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <img src={iconFacebook} alt="Facebook" srcset="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconYoutube} alt="Youtube" srcset="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconTwitter} alt="Twitter" srcset="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconPinterest} alt="Pinterest" srcset="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconInstagram} alt="Instagram" srcset="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
