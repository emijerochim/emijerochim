import "./home.scss";
import React from "react";

import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";

function Home() {
  return (
    <section className="home" id="home">
      <h2>Full Stack Developer</h2>
      <p>
        ¡Hola! me llamo <strong>Emi Jerochim</strong> y soy un desarrollador
        web.
      </p>
      <p>
        Construyo web apps, bots de discord, landing pages comerciales y más con
        un stack de tecnologías modernas y código limpio.
      </p>
      <SocialMedia />
      <Button to="stack" />
    </section>
  );
}

export default Home;
