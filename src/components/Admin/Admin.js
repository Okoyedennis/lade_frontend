import React, { useState } from "react";
import "./Admin.css"
import { Dropdown, DropdownButton } from "react-bootstrap";
import AllUser from "./AllUser";
import AllLoanApplicant from "./AllLoanApplicant";
import AllDonation from "./AllDonation";

const Admin = () => {
  const [users, setUsers] = useState(true);
  const [loanApplication, setLoanApplication] = useState(false);
  const [donations, setDonations] = useState(false);

  const handleUserApplication = () => {
    setUsers(true);
    setLoanApplication(false);
    setDonations(false)
  };

  const handleLoanApplication = () => {
    setLoanApplication(true);
    setUsers(false);
    setDonations(false);

  };

  const handleDonationApplication = () => {
    setDonations(true);
    setLoanApplication(false);
    setUsers(false);
  };

  const data = [
    {
      title: "View Users",
      func: handleUserApplication,
    },
    {
      title: "View Loan Application",
      func: handleLoanApplication,
    },
    {
      title: "View All Donation",
      func: handleDonationApplication,
    },
  ];
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper container">
        <div className="dashboard__btn-wrapper">
          {users && (
            <DropdownButton
              className="btn mt-5"
              id="dropdown-basic-button"
              title={"View Users"}
            >
              {data.map(({ title, func }) => (
                <>
                  <Dropdown.Item onClick={func}>{title}</Dropdown.Item>
                </>
              ))}
            </DropdownButton>
          )}
          {loanApplication && (
            <DropdownButton
              className="btn mt-5"
              id="dropdown-basic-button"
              title={"View Loan Application"}
            >
              {data.map(({ title, func }) => (
                <>
                  <Dropdown.Item onClick={func}>{title}</Dropdown.Item>
                </>
              ))}
            </DropdownButton>
          )}
          {donations && (
            <DropdownButton
              className="btn mt-5"
              id="dropdown-basic-button"
              title={"View All Donation"}
            >
              {data.map(({ title, func }) => (
                <>
                  <Dropdown.Item onClick={func}>{title}</Dropdown.Item>
                </>
              ))}
            </DropdownButton>
          )}
        </div>
        {users && <AllUser />}
        {loanApplication && <AllLoanApplicant />}
        {donations && <AllDonation />}
      </div>
    </div>
  );
};

export default Admin;
