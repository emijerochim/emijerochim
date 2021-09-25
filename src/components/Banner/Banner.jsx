import "./banner.scss";
import logo from "../../images/logo.png";

function Banner(props) {
  return (
    <div className={`banner ${props.darkMode}DarkMode`}>
      <a className="logo_container" href="#home">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>
      <div
        className="hamburger-container"
        onClick={() => {
          props.setDarkMode(!props.darkMode);
          props.setActiveDropdown(!props.activeDropdown);
        }}
      >
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Banner;
