import React from "react";

const Financial = ({ apply, setApply }) => {
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
            In order to get more income, what would be your first option?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="moreIncome"
            required
            value={apply.moreIncome}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Opening a business">Opening a business</option>
            <option value="Get a job as public officer">
              Get a job as public officer
            </option>
            <option value="Get a job in a firm">Get a job in a firm</option>
            <option value="Increase agricultural production">
              Increase agricultural production
            </option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            What’s the first investment that you would like to make in
            agriculture?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="firstInvestment"
            required
            value={apply.firstInvestment}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="A tractor">A tractor</option>
            <option value="An irrigation system">An irrigation system</option>
            <option value="A storage facility">A storage facility</option>
            <option value="Improved seeds, pesticides, etc.">
              Improved seeds, pesticides, etc.
            </option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Would you prefer to find the money or need a loan?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="findMoney"
            required
            value={apply.findMoney}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Less than 10%">
              I prefer save of find the necessary money from my resources
            </option>
            <option value="I would opt for a loadr">
              I would opt for a load
            </option>
            <option value="Get a job in a firm">Get a job in a firm</option>
            <option value="Increase agricultural production">
              Increase agricultural production
            </option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            If you would opt for a loan, where?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="diffLoan"
            required
            value={apply.diffLoan}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="From a bank/MFI">From a bank/MFI</option>
            <option value="Through a Chama/group/other">
              Through a Chama/group/other
            </option>
            <option value="From the supplier">From the supplier</option>
            <option value="From a dealer I trust">From a dealer I trust</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            If yes, how much upfront would you be ready to put
          </label>
          <select
            id="inputState"
            className="form-select"
            name="upfrontPay"
            required
            value={apply.upfrontPay}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Less than 10%">Less than 10%</option>
            <option value="10-25%">10-25%</option>
            <option value="25-50%">25-50%</option>
            <option value="More than 50%">More than 50%</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            How many months would you need to pay back
          </label>
          <select
            id="inputState"
            className="form-select"
            name="payBackPeriod"
            required
            value={apply.payBackPeriod}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Less than 6">Less than 6</option>
            <option value="6-12">6-12</option>
            <option value="12-18">12-18</option>
            <option value="More than 18">More than 18</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Financial;
