import axios from "axios";
import moment from "moment";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { authHeader } from "../Services/BaseService";
import BASE_URL from "../Services/Constant";
import CurrencyFormat from "react-currency-format";
import ViewindividualLoan from "./ViewindividualLoan";

const AllLoanApplicant = () => {
  const [search, setSearch] = useState("");
  const [loan, setLoan] = useState([]);
  const [viewLoan, setViewLoan] = useState("");

  const viewFullLoanComponent = useRef();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/apply/all`, {
        headers: authHeader(),
      })
      .then((resp) => {
        setLoan(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const viewFullApplication = (item) => {
    setViewLoan(item);
    viewFullLoanComponent.current?.showFullApplication();
  };
    return (
      <>
        {viewLoan.length > 0 ? (
          <div className="card mt-4 viewUsers">
            <div className="card-header d-flex justify-content-between p-4">
              <div className="col-6">
                <h3>View All Loans</h3>
              </div>
              <div className="col-4 text-end">
                <input
                  type="text"
                  placeholder="Search User"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card-body">
              <table className="table table-striped col-md:table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">BVN</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date Applied</th>
                  </tr>
                </thead>
                <tbody>
                  {loan
                    .filter((val) =>
                      val.firstName.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                      <tr
                        key={item.id}
                        onClick={() => viewFullApplication(item)}
                        className="loanTable"
                      >
                        <th scope="row">{index + 1}</th>
                        <td className="capitalize">{item.firstName}</td>
                        <td className="capitalize">{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.bvn}</td>
                        <td>
                          <CurrencyFormat
                            renderText={(value) => <b>{value}</b>}
                            decimalScale={2}
                            value={item.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                        <td>{moment(item.createdAt).calendar("LL")}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="container applicationZero">
            <h2>No Loan Applicant</h2>
          </div>
        )}

        <ViewindividualLoan viewLoan={viewLoan} ref={viewFullLoanComponent} />
      </>
    );
};

export default AllLoanApplicant;
