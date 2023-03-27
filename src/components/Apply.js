import axios from "axios";
import BASE_URL from "./Services/Constant";
import React, { useState } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Apply.css";
import UserInfo from "./Apply/UserInfo";
import { authHeader } from "./Services/BaseService";
import Plot from "./Apply/Plot.js";
import Farm from "./Apply/Farm.js";
import Equipment from "./Apply/Equipment.js";
import Financial from "./Apply/Financial.js";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const [page, setPage] = useState(0);
  const [apply, setApply] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stateOfOrigin: "",
    gender: "",
    dateOfBirth: "",
    bvn: "",
    amount: 0,
    plotLocation: "",
    market: "",
    water: "",
    hectars: 0,
    grow: "",
    rotateCrops: "",
    harvests: 0,
    pestManagement: "",
    integratedPestManagement: "",
    soilTesting: "",
    equipment: "",
    marketingStrategy: "",
    netHouse: "",
    hearNetHouse: "",
    netInterestProd: "",
    moreIncome: "",
    firstInvestment: "",
    findMoney: "",
    diffLoan: "",
    upfrontPay: "",
    payBackPeriod: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const FormTitles = [
    "Personal Info",
    "Plot",
    "Farming",
    "Equipment",
    "Financial Strategy",
  ];



  const PageDisplay = () => {
    if (page === 0) {
      return <UserInfo apply={apply} setApply={setApply} />;
    } else if (page === 1) {
      return <Plot apply={apply} setApply={setApply} />;
    } else if (page === 2) {
      return <Farm apply={apply} setApply={setApply} />;
    } else if (page === 3) {
      return <Equipment apply={apply} setApply={setApply} />;
    } else if (page === 4) {
      return <Financial apply={apply} setApply={setApply} />;
    }
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
      <form className="container mb-3">
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "60%"
                  : page === 3
                  ? "80%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className="signUp_title">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footerBtn">
          <button
            className="btn mt-5 p-2 px-4"
            disabled={page === 0}
            onClick={(e) => {
              e.preventDefault();

              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn mt-5 p-2 px-4"
            onClick={(e) => {
              e.preventDefault();

              if (page === FormTitles.length - 1) {
                setLoading(true);

                axios
                  .post(`${BASE_URL}/apply`, apply, {
                    headers: authHeader(),
                  })
                  .then((resp) => {
                    console.log(resp);

                    if (resp.status === 201) {
                      navigate("/successApplySent");

                    }

                    setLoading(false);
                  })
                  .catch((error) => {
                    console.log(error);
                    setLoading(false);
                  });
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {loading ? (
              <div className="spinner-border text-white" role="status"></div>
            ) : (
              <>{page === FormTitles.length - 1 ? "Submit" : "Next"}</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
