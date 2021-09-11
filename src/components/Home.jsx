import "./home.scss";
import React from "react";

import SocialMedia from "./SocialMedia.jsx";

import arrow from "../images/arrow.png";
import smoothScroll from "../utils/smoothScroll";

function Home() {
  return (
    <div className="home-container">
      <h2>Desarrollador Web</h2>
      <p>
        Soy un desarrollador web, construyo web apps, bots de discord, landing
        pages comerciales y más con un stack de tecnologías modernas y código
        limpio.
      </p>
      <SocialMedia />
      <button type="button" href="#stack">
        <img
          className="arrow"
          src={arrow}
          alt="arrow"
          tabIndex="0"
          onClick={() => smoothScroll()}
        />
      </button>
    </div>
  );
}

export default Home;
