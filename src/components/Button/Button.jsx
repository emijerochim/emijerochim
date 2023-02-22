import arrow from "../../images/arrow.png";
import "./button.scss";

function Button({ to }) {
  const scrollToId = async (section) => {
    const element = document.getElementById(section);
    const target = element.getBoundingClientRect().top + window.scrollY;

    await window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-button"
      type="button"
      onClick={() => scrollToId(to)}
    >
      <img className="arrow" src={arrow} alt="arrow" tabIndex="0" />
    </button>
  );
}

export default Button;
