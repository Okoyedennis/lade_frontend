import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css";
import { Role } from "./Model/Role";

const Footer = () => {
    const currentUser = useSelector((state) => state.user);
   
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          {currentUser?.user.role !== Role.ADMIN && (
            <>
              <li className="nav-item">
                <a href="/apply">Apply</a>
              </li>
              <li className="nav-item">
                <a href="/donate">Invest</a>
              </li>
            </>
          )}
          {currentUser?.user?.role === Role.ADMIN && (
            <li className="nav-item">
              <a href="/admin">Admin Page</a>
            </li>
          )}
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2021 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
