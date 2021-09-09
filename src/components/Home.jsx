import "./home.scss";
import React from "react";
import SocialMedia from "./SocialMedia.jsx";
import arrow from "../images/arrow.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <h2>Desarrollador Web</h2>
        <p>
          Soy un desarrollador web, construyo web apps, bots de discord, landing
          pages comerciales y más con un stack de tecnologías modernas y código
          limpio.
        </p>
        <SocialMedia />
        <a href="https://www.youtube.com/watch?v=SRATfPuSRwY">
          <img className="arrow" src={arrow} alt="arrow" />
        </a>
      </div>
    </>
  );
}

export default Home;
