import React from "react";

const Farm = ({ apply, setApply }) => {
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
            What do you grow in your plot?
          </label>
          <textarea
            className="form-control"
            name="grow"
            value={apply.grow}
            onChange={(e) => handleChange(e)}
            required
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Do you rotate crops?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="rotateCrops"
            required
            value={apply.rotateCrops}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            How many harvests can you make each year?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="harvests"
            required
            value={apply.harvests}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="More than 3">More than 3</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Explain your pest management method
          </label>
          <select
            id="inputState"
            className="form-select"
            name="pestManagement"
            required
            value={apply.pestManagement}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Own production">Own production</option>
            <option value="Purchased on the market">
              Purchased on the market
            </option>
            <option value="Provided by the buyer/middleman">
              Provided by the buyer/middleman
            </option>
            <option value="Biological pest control">
              Biological pest control
            </option>
            <option value="Integrated Pest Management">
              Integrated Pest Management
            </option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            Do you know what Intg Pest Management is?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="integratedPestManagement"
            required
            value={apply.integratedPestManagement}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            If yes, what soil testing
          </label>
          <select
            id="inputState"
            className="form-select"
            name="soilTesting"
            required
            value={apply.soilTesting}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Only PH and EC">Only PH and EC</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Farm;
