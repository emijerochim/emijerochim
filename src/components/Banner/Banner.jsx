import "./banner.scss";
import logo from "../../images/logo.png";

function Banner(props) {
  return (
    <div className={`banner ${props.showMenu}Light`}>
      <a href="#home">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>
      <div
        className="hamburger-container"
        onClick={() => {
          props.setShowMenu(!props.showMenu);
        }}
      >
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Banner;
