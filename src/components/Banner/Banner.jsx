import "./banner.scss";
import logo from "../../images/logo.png";

function Banner({ deployed, setDeployed }) {
  return (
    <div className={`banner deployed-${!deployed}`}>
      <a className="logo_container" href="./">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h1>EMI JEROCHIM</h1>

      <div
        className="hamburger-container"
        onClick={() => {
          setDeployed(!deployed);
        }}
      >
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Banner;
