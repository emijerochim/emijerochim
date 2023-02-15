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
          ¡Hola! me llamo <strong>Emi Jerochim</strong>
        </p>
        <p>
          Construyo web apps, REST APIs y más con un stack de tecnologías
          modernas y código limpio.
        </p>
        <SocialMedia />
      </div>
      <Button to="portfolio" />
    </section>
  );
}

export default Home;
