import "./Footer.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>footer</div>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaHome>
            <div>
              <p> Agra, Uttar Pradesh</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaPhone>
            <div>
              <p>6395792940</p>
            </div>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaMailBulk>
            <div>
              <p>ishika21022001@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is me Ishika Agarwal. I design and develop experiences that
            makes people's lives simple.
          </p>
          <div className="socials">
            <a href="https://github.com/ishika-agarwal21">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              >
                {" "}
              </FaGithub>
            </a>

            <a href="https://www.linkedin.com/in/ishika-agarwal-47ab381a1/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              ></FaLinkedin>
            </a>

            <a href="https://www.instagram.com/ishikaalife/">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              ></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
