import React from "react";
import "./banner.scss";
import logo from "../images/logo.png";
import hamburguer from "../images/hamburguer.svg";

function Banner() {
  return (
    <div className="banner">
      <a href="http://emijerochim.com">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>
      <img src={hamburguer} alt="hamburguer-menu" />
    </div>
  );
}

export default Banner;
