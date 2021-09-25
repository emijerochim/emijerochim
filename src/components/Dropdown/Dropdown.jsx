import "./dropdown.scss";
import scrollToId from "../../utils/scrollToId";

function Dropdown(props) {
  return (
    <div className={`dropdown ${props.activeDropdown}ActiveDropdown`}>
      <nav className="options-container">
        <ul>
          <li>
            <button onClick={() => scrollToId("home")}>
              <h3>INICIO</h3>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToId("stack")}>
              <h3>STACK</h3>
            </button>
          </li>
          <li>
            <button href="#contact" onClick={() => scrollToId("home")}>
              <h3>CONTACTO</h3>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
