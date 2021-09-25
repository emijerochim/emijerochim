import "./footer.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import github from "../../images/socialMedia/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <SocialMedia />
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© Copyright 2021 - Emi Jerochim</p>
        <p className="footer-dev-bsas">Full Stack Developer - Buenos Aires, Argentina</p>
        <p className="footer-mail">dev@emijerochim.com</p>
        <a
          href="https://www.github.com/emijerochim"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" className="footer-repo-logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;