import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiMailSend } from "react-icons/bi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "../Model/User";
import BASE_URL from "../Services/Constant";
import { setCurrentUser } from "../../store/actions/user";


const SignIn = () => {
  const [user, setUser] = useState(new User("", "", "", "", "", ""));
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user);

    useEffect(() => {
      if (currentUser?._id) {
        navigate("/");
      }
      // eslint-disable-next-line
    }, []);
  
  const togglePasswordView = () => {
    setTogglePassword(!togglePassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/users/login`, user)
      .then((resp) => {

        if (resp.status === 200) {
          dispatch(setCurrentUser(resp.data));
          toast.success("Login successfully.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        if (resp.status === 200) {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 404) {
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
        <form onSubmit={(e) => handleLogin(e)}>
          {/* <Link to="/"><img src={logo} alt="logo" /></Link> */}
          <h1>Please sign in</h1>
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
          {/* <Link to="/forgotPassword" className="forgot_password">
            Forgot Password
          </Link> */}
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
                  <span className="sr-only">SignIn</span>
                </>
              )}
            </button>
          </div>
          <Link to="/signup">
            <p>I don't have an account</p>
          </Link>
          <p className="p">&copy; {new Date().getFullYear()}</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
