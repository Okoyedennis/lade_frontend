import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content container">
        <p>Natural Healthy Food</p>
        <p>
          At Lade farm, we provide the highest quality Organics Products for Nigeria and all
          around the world.
        </p>
        <Link to="/apply" className="button">
          Apply
        </Link>
      </div>
    </div>
  );
};

export default Hero;
