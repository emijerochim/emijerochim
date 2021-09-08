import "./banner.scss";
import logo from "../images/logo.png";
import whiteHamburguer from "../images/whiteHamburguer.svg";
import blackHamburguer from "../images/blackHamburguer.svg";

function Banner(props) {
  return (
    <div className={`banner ${props.darkMode}DarkMode`}>
      <a href="http://emijerochim.com">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>
      <img
        src={props.darkMode ? blackHamburguer : whiteHamburguer}
        onClick={() => props.setDarkMode(!props.darkMode)}
        alt="hamburguer-menu"
      />
    </div>
  );
}

export default Banner;
