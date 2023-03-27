import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { BiMailSend } from "react-icons/bi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "../Model/User";
import BASE_URL from "../Services/Constant";

const ForgotPassword = () => {
  const [user, setUser] = useState(new User("", "", "", "", "", ""));
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user.email) {
      setLoading(false);
      return;
    }

    axios
      .post(`${BASE_URL}/user/forgetPassword`, user)
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Reset mail sent, please check your mail.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        setLoading(false);
        setUser(new User("", "", "", "", "", ""));
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 404 || error.response.status === 500) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log(error);
      });
  };

  return (
    <div className="login">
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
      <div className="login__wrapper container">
        <form onSubmit={(e) => handleForgotPassword(e)}>
          {/* <Link to="/"><img src={logo} alt="logo" /></Link> */}
          <h1>Forgot Password</h1>
          <div className="form-float first_child">
            <BiMailSend />
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={user.email}
              name="email"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <button
              className="w-100 btn btn-lg btn-primary forgotPassword-btn"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <div
                  className="spinner-border text-white spinner-border-sm"
                  role="status"
                ></div>
              ) : (
                <>
                  <span className="sr-only">Send</span>
                </>
              )}
            </button>
          </div>
          <p className="p">&copy; {new Date().getFullYear()}</p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
