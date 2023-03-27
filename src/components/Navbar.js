import axios from "axios";
import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/AgricultureLogo/1.png";
import { clearCurrentUser } from "../store/actions/user";

import "./Navbar.css";
import { authHeader } from "./Services/BaseService";
import BASE_URL from "./Services/Constant";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewUserDetails from "./ViewUserDetails";
import { Role } from "./Model/Role";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [detailsOpened, setDetailsOpened] = useState(false);
  const detailsComponent = useRef();

  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user);
  const editAccountRequest = () => {
    detailsComponent.current?.showAccountModal();
  };

  const logout = () => {
    axios
      .post(`${BASE_URL}/users/logout`, currentUser.token, {
        headers: authHeader(),
      })
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Logout successfully.", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(clearCurrentUser());
    navigate("/");
  };

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <nav className="navbar container">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          {currentUser?.user.role !== Role.ADMIN && (
            <>
              <li className="nav-item">
                <NavLink to="/apply" onClick={closeMenu}>
                  Apply
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/donate" onClick={closeMenu}>
                  Invest
                </NavLink>
              </li>
            </>
          )}
          {currentUser?.user?.role === Role.ADMIN && (
            <li className="nav-item">
              <NavLink to="/admin">Admin Page</NavLink>
            </li>
          )}
          <li
            className="nav-item"
            onMouseEnter={() => setDetailsOpened(true)}
            onMouseLeave={() => setDetailsOpened(false)}
          >
            {currentUser ? (
              <>
                <div className="toggle">
                  Hello {currentUser?.user?.firstName}
                </div>
                {detailsOpened && (
                  <ul className="header-menu">
                    <li onClick={logout}>Logout</li>
                    <hr />
                    <li onClick={editAccountRequest}>Profile Details</li>
                  </ul>
                )}
              </>
            ) : (
              <a href="/signIn" onClick={closeMenu}>
                SignIn
              </a>
            )}
          </li>
        </ul>
      </nav>
      {currentUser ? <ViewUserDetails ref={detailsComponent} /> : null}
    </div>
  );
};

export default Navbar;
