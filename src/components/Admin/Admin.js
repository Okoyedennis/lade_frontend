import React, { useState } from "react";
import "./Admin.css"
import { Dropdown, DropdownButton } from "react-bootstrap";
import AllUser from "./AllUser";
import AllLoanApplicant from "./AllLoanApplicant";

const Admin = () => {
  const [users, setUsers] = useState(true);
  const [loanApplication, setLoanApplication] = useState(false);

  const handleUserApplication = () => {
    setUsers(true);
    setLoanApplication(false);
  };

  const handleLoanApplication = () => {
    setLoanApplication(true);
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
        </div>
        {users && <AllUser />}
        {loanApplication && <AllLoanApplicant />}
      </div>
    </div>
  );
};

export default Admin;
