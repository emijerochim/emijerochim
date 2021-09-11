import "./home.scss";
import React from "react";

import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";

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
      <Button route="stack" />
    </div>
  );
}

export default Home;
