import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import "./Apply.css";
import { db } from "../firebase-config";
import emailjs from "emailjs-com";

const Apply = () => {
  const [apply, setApply] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stateOfOrigin: "",
    gender: "",
    dateOfBirth: "",
    bvn: "",
  });
  const [countryState, setCountryState] = useState([]);
  const [pending, setPending] = useState(false);
  const [flag, setFlag] = useState(false);
  const usersCollectionRef = collection(db, "users");

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

  const applyForSchool = async (e) => {
    e.preventDefault();
    setPending(true);

    await addDoc(usersCollectionRef, {
      firstName: apply.firstName,
      lastName: apply.lastName,
      email: apply.email,
      stateOfOrigin: apply.stateOfOrigin,
      gender: apply.gender,
      dateOfBirth: apply.dateOfBirth,
      bvn: Number(apply.bvn),
    })
      .then((resp) => {
        setTimeout(() => {
          toast.success("Applied Successfully.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFlag(true);
        }, 2000);

          emailjs
            .sendForm(
              "service_s33q0nk",
              "template_rs82gzh",
              // form.current,
              e.target,
              "user_F1KvHoYXiTu1HRN9fVl8g"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
      })
      .catch((error) => {
        setTimeout(() => {
          toast.success("Unexpected Error.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, 2000);
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (pending) {
        setPending(false);
      }
    }, 2000);
  }, [pending]);

  useEffect(() => {
    setTimeout(() => {
      if (flag) {
        setApply({
          firstName: "",
          lastName: "",
          email: "",
          stateOfOrigin: "",
          gender: "",
          dateOfBirth: "",
          bvn: "",
        });
      }
      setFlag(false);
    }, 3000);
  }, [flag]);

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
      <form
        action=""
        onSubmit={(e) => applyForSchool(e)}
        className="container mb-3"
      >
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
        </div>
        <button type="submit" className="btn mt-5 p-3 ">
          {pending ? (
            <div className="spinner-border text-white" role="status"></div>
          ) : (
            <span className="sr-only"> Submit Request</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Apply;
