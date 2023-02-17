import "./button.scss";

import arrow from "../../images/arrow.png";
import scrollToId from "../../utils/scrollToId";

function Button(props) {
  return (
    <button
      className="scroll-button"
      type="button"
      onClick={() => scrollToId(props.to)}
    >
      <img className="arrow" src={arrow} alt="arrow" tabIndex="0" />
    </button>
  );
}

export default Button;
