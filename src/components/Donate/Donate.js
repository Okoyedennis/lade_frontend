import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authHeader } from "../Services/BaseService";
import BASE_URL from "../Services/Constant";
import "./Donate.css";

const Donate = ({ setAmountFromDonation }) => {
  const [donation, setDonation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    bvn: "",
    amount: "",
    message: "",
  });
  const [country, setCountry] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //To fatch the country of school
  useEffect(() => {
    axios
      .get(`https://countriesnow.space/api/v0.1/countries`)
      .then((resp) => {
        setCountry(resp?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDonation((prevState) => {
      return { ...prevState, [name]: value };
    });
      setAmountFromDonation(donation.amount)
  };

  const handleDonation = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/donation`, donation, {
        headers: authHeader(),
      })
      .then((resp) => {
        if (resp.status === 201) {
          navigate("/success_donated");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="form__weapper">
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <form className="container mb-3" onSubmit={(e) => handleDonation(e)}>
        <div className="signUp_title">
          <h1>Donation</h1>
        </div>
        <div className="body">
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
                  value={donation.firstName}
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
                  value={donation.lastName}
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
                  value={donation.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Country of Residence
                </label>
                <select
                  required
                  className="form-control"
                  name="country"
                  value={donation.country}
                  onChange={(e) => handleChange(e)}
                >
                  <option>--Select Country--</option>
                  {country?.map(({ country }, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
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
                  value={donation.bvn}
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
                  placeholder="0"
                  aria-label="Email"
                  name="amount"
                  required
                  value={donation.amount}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <label className="form-label">Leave a message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={donation.message}
                  cols="30"
                  rows="5"
                  required
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
          </>
        </div>
        <div className="footerBtn">
          <button className="btn mt-5 p-2 px-4" type="submit">
            {loading ? (
              <div className="spinner-border text-white" role="status" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donate;
