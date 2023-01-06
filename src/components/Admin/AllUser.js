import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { authHeader } from "../Services/BaseService";
import BASE_URL from "../Services/Constant";
import moment from "moment";

const AllUser = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/all`, {
        headers: authHeader(),
      })
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card mt-4 viewUsers">
      <div className="card-header d-flex justify-content-between p-4">
        <div className="col-6">
          <h3>View All Users</h3>
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
              <th scope="col">Role</th>
              <th scope="col">Date Registered</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((val) =>
                val.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td className="capitalize">{item.firstName}</td>
                  <td className="capitalize">{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{moment(item.createdAt).format("LL")}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
