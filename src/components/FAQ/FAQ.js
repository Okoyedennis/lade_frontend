import React from "react";
import "./FAQ.css";
import img1 from "../../images/lade2.jpeg";
import { FAQ_Data } from "../data/data";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq__wrapper">
          <div className="faq__left">
            <img src={img1} alt="Lade" />
          </div>
          <div className="faq__right">
            {FAQ_Data.map(({ title, text }, i) => (
              <div className="faq__right-content" key={i}>
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
