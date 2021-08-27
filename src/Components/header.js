/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/header.css";
import Logo from "../assets/img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <div className="header__links">
        <a href="#" style={{ color: "black" }}>
          <strong>About</strong>
        </a>
        <a href="#">Help</a>
        <a href="#">Features</a>
        <a href="#">Signup</a>
      </div>
      <div className="header__button">
        <button>
          Request Demo
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            className="header__icon"
          />
        </button>
      </div>
    </div>
  );
};

export default header;
