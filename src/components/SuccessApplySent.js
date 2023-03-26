import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./SuccessApplySent.css";
import Payment from "./Donate/Payment";

const SuccessApplySent = ({ text, amountFromDonation }) => {
  return (
    //NOTE THAT I REUSED THE STYLYING FOR FORGOT PASSWORD
    <div className="forgotPassword">
      <div className="forgotPassword__wrapper container">
        <div className="forgetPassword__content successMail">
          <div>
            <IoMdCheckmarkCircle />
          </div>
          <h5>{text}</h5>
          <div className="forgetPassword__text ">
            {amountFromDonation ? (
              <Payment amountFromDonation={amountFromDonation} />
            ) : (
              <Link to="/">Go Back Home</Link>
            )}
          </div>
        </div>
        {amountFromDonation ? (
          <div className="strip__credential">
            <h4>*Please use the following test credit card details for payment*</h4>
            <h3>4242 4242 4242 4242 - Exp: 01/25 - CVW:123</h3>
          </div>
        ): null}
      </div>
    </div>
  );
};

export default SuccessApplySent;
