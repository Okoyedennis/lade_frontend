import React from "react";
import "./Benefit.css";
import { whyInvestData } from "../data/data";

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="benefit container">
        <h2>Benefits of crowdfunding for investors</h2>
        <div className="benefit__wrapper">
          {whyInvestData.map(
            ({ title, text, subTextOne, subTextTwo }, index) => (
              <div className="benefit__wrapper_content" key={index}>
                <h5>{title}</h5>
                <p>{text}</p>
                <p>{subTextOne}</p>
                <p>{subTextTwo}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
