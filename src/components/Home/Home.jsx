import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";
import "./home.scss";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <h2>Full Stack Developer</h2>
        <p>
          Hi! my name is <strong>Emi Jerochim</strong>
        </p>
        <p>
          I build web apps, landing pages, REST APIs, bots and more with a stack
          of modern technologies and clean code.
        </p>
        <SocialMedia />
      </div>
      <Button to="portfolio" />
    </section>
  );
}

export default Home;
