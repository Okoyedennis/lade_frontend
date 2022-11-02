import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { MdPeople, MdSchool } from "react-icons/md";
import img from "../images/photo.jpeg";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__wrapper container">
          <div className="about__left">
            <img src={img} alt="" />
          </div>
          <div className="about__right">
            <h2>What we do?</h2>
            <p>
              The Agri-Business/Small and Medium Enterprise Investment Scheme is
              an initiative to support the Federal Government's efforts and
              policy measures for the promotion of agricultural businesses and
              small/medium enterprises (SMEs) as vehicles for sustainable
              economic development and employment generation
            </p>
            <Link to="/apply">Apply</Link>
          </div>
        </div>
      </div>
      <div className="home_about container">
        <div className="home_about-content">
          <MdSchool className="icon" />
          <h4>Apply For Loan</h4>
          <p>
            Create an account by clicking on ‘Apply now’ as an applicant,
            validate your BVN and select a NIRSAL MFB certified Entrepreneurship
            Development Institute (EDI).
          </p>
        </div>
        <div className="home_about-content">
          <SiYourtraveldottv className="icon" />
          <h4>Get Business Support Service</h4>
          <p>
            The Entrepreneurship Development Institute assists you to implement
            business plan and provide business support services commercially
          </p>
        </div>
        <div className="home_about-content">
          <MdPeople className="icon" />
          <h4>Repay Loan</h4>
          <p>
            Run your business, keep proper records, monitor sales and expenses
            to maximize profit and pay back the loan.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
