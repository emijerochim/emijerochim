import React, { useState, useEffect } from "react";
import organizr from "../../images/organizr.png";
import smartbrain from "../../images/smartbrain.png";
import emijerochim from "../../images/emijerochim.png";
import Button from "../Button/Button";
import "./Portfolio.scss";

const Portfolio = ({ scrollToId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [organizr, smartbrain, emijerochim];
  const itemsTitles = ["Organizr 👁️‍🗨️", "SmartBrain 🧠", "Portfolio 💼"];
  const itemsLinks = [
    "https://emijerochim.github.io/organizr/",
    "https://emijerochim.github.io/smartbrain/",
    "https://emijerochim.com/",
  ];
  const itemsDescriptions = [
    [
      "Cash-flow management web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "🖥️ Backend: Node.js, Express, Mongoose",
      "💾 Database: MongoDB",
      "📚 Libraries: JWT, Moment.js",
    ],
    [
      "Face detection full stack web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "🖥️ Backend: Node.js, Express, pg",
      "💾 Database: PostgreSQL",
      "📚 Libraries: Clarifai API, JWT",
    ],
    [
      "Portfolio web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "📚 Libraries: react-tsparticles",
      "☁️ Deploy: GitHub Pages",
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="items-container">
        <div className="item-description">
          <div className="item-title-container">
            <h3 className="item-title">{itemsTitles[activeIndex]}</h3>
          </div>
          <div className="item-stack">
            {itemsDescriptions[activeIndex].map((item, index) => (
              <p className="item" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="image-container">
          <button className="item-btn btn-left" onClick={handlePrevClick}>
            &#60;
          </button>
          <img
            className="item-image"
            src={images[activeIndex]}
            alt="Portfolio"
            onClick={() => window.open(itemsLinks[activeIndex], "_blank")}
          />
          <button className="item-btn btn-right" onClick={handleNextClick}>
            &#62;
          </button>
        </div>
      </div>
      <Button scrollToId={scrollToId} to="stack" />
    </div>
  );
};

export default Portfolio;
