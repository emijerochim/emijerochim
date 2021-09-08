import React from "react";
import "./home.scss";
import SocialMedia from "./SocialMedia.jsx";
import arrow from "../images/arrow.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <h2>Desarrollador Web</h2>
        <p>Lleva tu proyecto al siguiente nivel</p>
        <SocialMedia />
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </>
  );
}

export default Home;
