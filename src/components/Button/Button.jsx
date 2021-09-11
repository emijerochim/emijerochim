import "./button.scss";

import arrow from "../../images/arrow.png";
import smoothScroll from "../../utils/smoothScroll";

function Button(props) {
  return (
    <button type="button" href={`#${props.route}`}>
      <img
        className="arrow"
        src={arrow}
        alt="arrow"
        tabIndex="0"
        onClick={() => smoothScroll()}
      />
    </button>
  );
}

export default Button;
