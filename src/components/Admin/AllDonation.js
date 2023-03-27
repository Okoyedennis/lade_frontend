import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { authHeader } from '../Services/BaseService';
import BASE_URL from '../Services/Constant';
import CurrencyFormat from "react-currency-format";


const AllDonation = () => {
     const [search, setSearch] = useState("");
    const [donation, setDonation] = useState([]);

      useEffect(() => {
        axios
          .get(`${BASE_URL}/donation/all`, {
            headers: authHeader(),
          })
          .then((resp) => {
            setDonation(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    console.log(donation);
    
    return (
      <>
        {donation.length > 0 ? (
          <div className="card mt-4 viewUsers">
            <div className="card-header d-flex justify-content-between p-4">
              <div className="col-6">
                <h3>View All Investors</h3>
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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">BVN</th>
                    <th scope="col">Amount Donated</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {donation
                    .filter((val) =>
                      val.firstName.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td className="capitalize">
                          {item.firstName} {item.lastName}
                        </td>
                        <td>{item.email}</td>
                        <td>{item.country}</td>
                        <td>{item.bvn}</td>
                        <td>
                          <CurrencyFormat
                            renderText={(value) => <b>{value}</b>}
                            decimalScale={2}
                            value={item.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </td>
                        <td>{item.message}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="container applicationZero">
            <h2>No Donation Yet</h2>
          </div>
        )}
      </>
    );
}

export default AllDonation