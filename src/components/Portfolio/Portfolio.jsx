import React, { useState } from "react";
import organizr from "../../images/organizr.PNG";
import smartbrain from "../../images/smartbrain.PNG";
import robofriends from "../../images/robofriends.PNG";
import emijerochim from "../../images/emijerochim.PNG";
import Button from "../Button/Button";
import "./Portfolio.scss";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [organizr, smartbrain, robofriends, emijerochim];
  const itemsTitles = [
    "Organizr 👁️‍🗨️",
    "SmartBrain 🧠",
    "RoboFriends 🤖 ",
    "Portfolio 💼",
  ];
  const itemsDescriptions = [
    [
      "Cash-flow management web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "🖥️ Backend: Node.js, Express, Mongoose",
      "🧰 Tools: Git, VS Code, Nodemon, Trello",
      "📚 Libraries: JWT, Moment.js, Chart.js",
      "💾 Database: MongoDB",
    ],
    [
      "Face detection full stack web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "🖥️ Backend: Node.js, Express",
      "📚 Libraries: Clarifai API, JWT, pg",
      "💾 Database: PostgreSQL",
    ],
    [
      "API-generated users search web app",
      "📱 Frontend: HTML5, React.js",
      "📚 Libraries: Tachyons, RoboHash API, JSONPlaceholder API",
      "☁️ Deploy: GitHub Pages",
    ],
    [
      "Portfolio web app",
      "📱 Frontend: HTML5, CSS3, SASS, React.js",
      "📚 Libraries: react-tsparticles",
      "☁️ Deploy: GitHub Pages",
    ],
  ];

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
          />
          <button className="item-btn btn-right" onClick={handleNextClick}>
            &#62;
          </button>
        </div>
      </div>
      <Button to="stack" />
    </div>
  );
};

export default Portfolio;
