import React from "react";

const Equipment = ({ apply, setApply }) => {
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
            What are your main equipments?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="equipment"
            required
            value={apply.equipment}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Greenhouse">Greenhouse</option>
            <option value="AgroZ net house">AgroZ net house</option>
            <option value="Tractor/ other mechanical machines">
              Tractor/ other mechanical machines
            </option>
            <option value="Good storage facility">Good storage facility</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Where do you get labour force
          </label>
          <select
            id="inputState"
            className="form-select"
            name="market"
            required
            value={apply.market}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Association">Association</option>
            <option value="Cooperatives">Cooperatives</option>
            <option value="Peers and friends">Peers and friends</option>
            <option value="Family">Family</option>
            <option value="Casual labourers">Casual labourers</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            What’s your main marketing strategy?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="marketingStrategy"
            required
            value={apply.marketingStrategy}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="No strategy">No strategy</option>
            <option value="Just go to the market">Just go to the market</option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="Internet">Internet</option>
            <option value="From agro-dealers">
              Radio, TV, newspaper, other advertising
            </option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Do you know what a net house is?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="netHouse"
            required
            value={apply.netHouse}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            How did you hear about it?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="hearNetHouse"
            required
            value={apply.hearNetHouse}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="I saw on a field">I saw on a field</option>
            <option value="Demo plots">Demo plots</option>
            <option value="Internet">Internet</option>
            <option value="From agro-dealers">From agro-dealers</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Is the net house an interesting product?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="netInterestProd"
            required
            value={apply.netInterestProd}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="I don’t know what a net house is">I don’t know what a net house is</option>
            <option value="Not at all">Not at all</option>
            <option value="Yes, but only if subsidized">Yes, but only if subsidized</option>
            <option value="No, it’s too expensive">No, it’s too expensive</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Equipment;
