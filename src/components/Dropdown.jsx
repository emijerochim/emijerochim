import "./dropdown.scss";

function Dropdown(props) {
  return (
    <div className={`dropdown ${props.showMenu}ShowMenu`}>
      <h3>INICIO</h3>
      <h3>STACK</h3>
      <h3>PROYECTOS</h3>
      <h3>CONTACTO</h3>
    </div>
  );
}

export default Dropdown;
