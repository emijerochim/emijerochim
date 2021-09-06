import React from "react";
import "./banner.scss";
import logo from "../images/logo.png";
import hamburguer from "../images/hamburguer.svg";

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="logo" />
      <h1>EMI JEROCHIM</h1>
      <img src={hamburguer} alt="hamburguer-menu" />
    </div>
  );
}

export default Banner;
