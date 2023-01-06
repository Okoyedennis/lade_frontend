import axios from "axios";
import React, { useImperativeHandle, useState } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
import { Modal } from "react-bootstrap";
import { authHeader } from "./Services/BaseService";
import BASE_URL from "./Services/Constant";

const ViewUserDetails = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  useImperativeHandle(ref, () => ({
    showAccountModal() {
      setTimeout(() => {
        setShow(true);
      }, 0);
    },
  }));

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/me`, {
        headers: authHeader(),
      })
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Modal show={show}>
      <form noValidate>
        <div className="modal-header">
          <h5 className="modal-title">My Details</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShow(false)}
          >
            {" "}
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              className="form-control"
              required
              value={user.firstName}
              disabled
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              className="form-control"
              required
              value={user.lastName}
              disabled
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              placeholder="Product Price"
              className="form-control"
              required
              value={user.email}
              disabled
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              placeholder="Product Price"
              className="form-control"
              required
              value={user.gender}
              disabled
            />
          </div>
        </div>
      </form>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </Modal>
  );
});

export default ViewUserDetails;
