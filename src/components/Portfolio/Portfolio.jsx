import React, { useState } from "react";
import organizr_web from "../../images/organizr_web.PNG";
import smartbrain_web from "../../images/smartbrain_web.PNG";
import robofriends_web from "../../images/robofriends_web.PNG";
import Button from "../Button/Button";
import "./Portfolio.scss";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileImages = [];
  const webImages = [organizr_web, smartbrain_web, robofriends_web];
  const itemsTitles = ["Organizr", "SmartBrain", "RoboFriends"];
  const itemsDescriptions = [
    "orgdrg ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptatibus quae voluptatem quibusdam voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam",
    "Face detection full stack app.\n\n📱 Frontend: HTML5, CSS3, SASS, React.js\n🖥️ Backend: Node.js, Express, JWT Authentication, pg\n💾 Database: PostgreSQL",
    "robofri ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptatibus quae voluptatem quibusdam voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam",
  ];

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + webImages.length) % webImages.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % webImages.length);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="items-container">
        <div className="item-title-container">
          <h3 className="item-title">{itemsTitles[activeIndex]}</h3>
        </div>
        <div className="image-container">
          <button className="item-btn" onClick={handlePrevClick}>
            Prev
          </button>
          <img
            className="item-image"
            src={webImages[activeIndex]}
            alt="Portfolio"
          />
          <button className="item-btn" onClick={handleNextClick}>
            Next
          </button>
        </div>
        <div className="item-description">
          <p>{itemsDescriptions[activeIndex]}</p>
        </div>
      </div>
      <Button to="stack" />
    </div>
  );
};

export default Portfolio;
