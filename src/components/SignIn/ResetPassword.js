import React, { useState } from "react";
import "./SignIn.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../Services/Constant";
import logo from "../../images/AgricultureLogo/1.png";
import User from "../Model/User";

const ResetPassword = () => {
  const [user, setUser] = useState(new User("", "", "", "", "", ""));
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const togglePasswordView = () => {
    setTogglePassword(!togglePassword);
  };
  const togglePasswordView2 = () => {
    setTogglePassword2(!togglePassword2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user.password || !confirmPassword) {
      setLoading(false);
      return;
    }

    if (user.password.length < 7) {
      toast.error("Password should not be less than 7 characters", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);

      return;
    }

    if (user.password !== confirmPassword) {
      toast.error("Please reconfirm your password", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);

      return;
    }

    axios
      .post(`${BASE_URL}/reset-password/${resetToken}`, user)
      .then((resp) => {
       
          toast.success("Password Reset Successful, Please Login", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        setLoading(false);

        if (!loading) {
          setTimeout(() => {
            navigate("/signIn");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 404 || error.response.status === 400) {
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
        <form onSubmit={(e) => handleResetPassword(e)}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h1>Reset Password</h1>
          <div className="form-float second_child">
            <div onClick={togglePasswordView} style={{ cursor: "pointer" }}>
              {togglePassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </div>
            <input
              type={togglePassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={user.password}
              name="password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-float second_child">
            <div onClick={togglePasswordView2} style={{ cursor: "pointer" }}>
              {togglePassword2 ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </div>
            <input
              type={togglePassword2 ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={confirmPassword}
              name="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className="w-100 btn btn-lg btn-primary"
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
                  <span className="sr-only">Reset</span>
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

export default ResetPassword;
