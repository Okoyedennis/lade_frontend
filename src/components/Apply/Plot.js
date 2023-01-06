import React from "react";

const Plot = ({ apply, setApply }) => {
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
            How’s the plot location?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="plotLocation"
            required
            value={apply.plotLocation}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Rural – isolated: far from a market and a major city">
              Rural – isolated: far from a market and a major city
            </option>
            <option value="Rural, with easy access to a market">
              Rural, with easy access to a market
            </option>
            <option value="Peri-Urban – major city">
              Peri-Urban – major city
            </option>
            <option value="Peri-Urban – Nairobi">Peri-Urban – Nairobi</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            How’s access to the market?
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
            <option value="Local market">Local market</option>
            <option value="Urban market">Urban market</option>
            <option value="Rely on middlemen of agricultural">products</option>
            <option value="Access to supermarkets">
              Access to supermarkets
            </option>
            <option value="Access to export/exporters">
              Access to export/exporters
            </option>
            <option value="Link to individual via internet or other">
              means
            </option>
          </select>
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="inputEmail4" className="form-label">
            How’s access to water?
          </label>
          <select
            id="inputState"
            className="form-select"
            name="water"
            required
            value={apply.water}
            onChange={(e) => handleChange(e)}
          >
            <option selected>Choose...</option>
            <option value="Very good: regular irrigation with pumps or drip irrigation system">
              Very good: regular irrigation with pumps or drip irrigation system
            </option>
            <option value="Good: regular access to water irrigation or river with no water saving">
              Good: regular access to water irrigation or river with no water
              saving systems
            </option>
            <option value="Fair: irregular access to water sources">
              Fair: irregular access to water sources
            </option>
            <option value="Bad: the farmer relies only on rainfall">
              Bad: the farmer relies only on rainfall
            </option>
          </select>
        </div>
        <div className="col">
          <div className="col">
            <label htmlFor="inputEmail4" className="form-label">
              How big is the plot in hectars
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Land in hectars"
            //   aria-label="Email"
              name="hectars"
              required
              value={apply.hectars}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plot;
