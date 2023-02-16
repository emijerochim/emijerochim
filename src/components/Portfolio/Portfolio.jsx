import React, { useState } from "react";
import organizr_web from "../../images/organizr_web.PNG";
import smartbrain_web from "../../images/smartbrain_web.PNG";
import robofriends_web from "../../images/robofriends_web.PNG";
import Button from "../Button/Button";
import "./Portfolio.scss";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [organizr_web, smartbrain_web, robofriends_web];
  const itemsTitles = ["Organizr 👁️‍🗨️", "SmartBrain 🧠", "RoboFriends 🤖 "];
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
