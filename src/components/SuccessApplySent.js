import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./SuccessApplySent.css";

const SuccessApplySent = () => {
  return (
    //NOTE THAT I REUSED THE STYLYING FOR FORGOT PASSWORD
    <div className="forgotPassword">
      <div className="forgotPassword__wrapper container">
        <div className="forgetPassword__content successMail">
          <div>
            <IoMdCheckmarkCircle />
          </div>
          <h5>Applied Successfully</h5>
          <div className="forgetPassword__text ">
            <Link to="/">Go Back Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessApplySent;
