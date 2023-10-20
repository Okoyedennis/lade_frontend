import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Role } from "./Model/Role";

const Hero = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <div className="hero">
      <div className="content container">
        <p>Invest in an Agro Business</p>
        <p>
          At Lade farm, we provide the highest quality Organics Products for
          Nigeria and all around the world.
        </p>
        {currentUser?.user.role !== Role.ADMIN && (
          <div className="actions">
            <Link to="/apply" className="button">
              Apply
            </Link>
            <Link to="/donate" className="button">
              Invest
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
