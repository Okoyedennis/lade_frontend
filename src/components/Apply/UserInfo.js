import axios from "axios";
import React, { useEffect, useState } from "react";

const UserInfo = ({ apply, setApply }) => {
  const [countryState, setCountryState] = useState([]);

  useEffect(() => {
    axios
      .post(`https://countriesnow.space/api/v0.1/countries/states`, {
        country: "Nigeria",
      })
      .then((resp) => {
        setCountryState(resp?.data?.data?.states);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setApply((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            name="firstName"
            required
            value={apply.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            name="lastName"
            required
            value={apply.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="row g-3 ">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            name="email"
            required
            value={apply.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            State Of Origin
          </label>
          <select
            id="inputState"
            className="form-select"
            name="stateOfOrigin"
            required
            value={apply.stateOfOrigin}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            {countryState.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Gender
          </label>
          <select
            id="inputState"
            className="form-select"
            name="gender"
            required
            value={apply.gender}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            name="dateOfBirth"
            required
            value={apply.dateOfBirth}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Enter BVN
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter BVN"
            aria-label="Email"
            name="bvn"
            required
            value={apply.bvn}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Enter Amount
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Amount"
            aria-label="Email"
            name="amount"
            required
            value={apply.amount}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="row g-3"></div>
    </>
  );
};

export default UserInfo;
