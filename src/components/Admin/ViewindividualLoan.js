import axios from "axios";
import moment from "moment";
import React, { useImperativeHandle, useState } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
import { Modal } from "react-bootstrap";
import { authHeader } from "../Services/BaseService";
import BASE_URL from "../Services/Constant";

const ViewindividualLoan = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [viewLoan, setViewLoan] = useState([]);

  useImperativeHandle(ref, () => ({
    showFullApplication() {
      setTimeout(() => {
        setShow(true);
      }, 0);
    },
  }));

  useEffect(() => {
    axios
      .get(`${BASE_URL}/appied/all/${props.viewLoan._id}`, {
        headers: authHeader(),
      })
      .then((resp) => {
        setViewLoan(resp.data);
      })
      .catch((error) => {
        console.log();
      });
  }, [props.viewLoan._id]);
  return (
    <Modal show={show}>
      <form>
        <div className="modal-header">
          <h5 className="modal-title">
            View School Details of{" "}
            <b>
              {viewLoan.firstName} {viewLoan.lastName}
            </b>
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShow(false)}
          ></button>
        </div>
        <div className="modal-body">
          <>
            <div className="form-group mb-3">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                value={viewLoan.email}
                disabled={true}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>BVN:</label>
              <input
                type="text"
                className="form-control"
                value={viewLoan?.bvn}
                disabled={true}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Date Applied:</label>
              <input
                type="text"
                className="form-control"
                value={moment(viewLoan?.createdAt).calendar("LL")}
                disabled={true}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Date of Birth:</label>
              <input
                type="text"
                className="form-control"
                value={moment(viewLoan?.dateOfBirth).calendar("LL")}
                disabled={true}
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                If you would opt for a loan, where?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.diffLoan}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                What are your main equipments?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.equipment}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                If yes, how much upfront would you be ready to put
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.findMoney}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                What’s the first investment that you would like to make in
                agriculture?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.firstInvestment}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                What do you grow in your plot?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.grow}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                How many harvests can you make each year?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.harvests}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">How did you hear about it?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.hearNetHouse}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                {" "}
                How big is the plot in hectars
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.hectars}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                {" "}
                Do you know what Intg Pest Management is?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.integratedPestManagement}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">How’s access to the market?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.market}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                {" "}
                What’s your main marketing strategy?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.marketingStrategy}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                In order to get more income, what would be your first option?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.moreIncome}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                Do you know what a net house is?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.netHouse}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                Is the net house an interesting product?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.netInterestProd}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                How many months would you need to pay back?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.payBackPeriod}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                Explain your pest management method?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.pestManagement}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">How’s the plot location?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.plotLocation}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">Do you rotate crops?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.rotateCrops}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">If yes, what soil testing?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.soilTesting}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">State Of Origin?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.stateOfOrigin}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">
                If yes, how much upfront would you be ready to put?
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.upfrontPay}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="floatingTextarea2">How’s access to water?</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={viewLoan?.water}
                cols="30"
                rows="2"
                disabled={true}
                name="body"
                required
              ></textarea>
            </div>
          </>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
});
export default ViewindividualLoan;
