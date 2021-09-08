import React from "react";
import "./socialMedia.scss";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import mail from "../images/mail.svg";

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.twitter.com/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={twitter} alt="twitter" />
      </a>
      <a
        href="https://www.instagram.com/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://www.github.com/emijerochim"
        rel="noreferrer"
        target="_blank"
      >
        <img src={github} alt="github" />
      </a>
      <a href="mailto:dev@emijerochim.com" rel="noreferrer" target="_blank">
        <img src={mail} alt="mail" />
      </a>
    </div>
  );
}

export default SocialMedia;
