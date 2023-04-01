import React from "react";
import "./HowItWorks.css";
import img1 from "../../images/lade1.jpeg";
import { howItWorksData } from "../data/data";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorks__wrapper container">
        <div className="howItWorks__left">
          <h6>How It Works</h6>
          <h2>
            Get access to affordable loans to start and grow you business in 6
            steps
          </h2>
          <div className="howItWorks__text-container">
            {howItWorksData.map(({ num, lead, text }) => (
              <div className="howItWorks__text-wrapper" key={num}>
                <p className="howItWorks__text-number">
                  <span>{num}</span>
                </p>
                <h5>{lead}</h5>
                <p className="howItWorks__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="howItWorks__right">
          <img src={img1} alt="
          Omolade" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
