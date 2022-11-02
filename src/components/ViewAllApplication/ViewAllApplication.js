import React, { useState } from "react";
import { useEffect } from "react";
import "./ViewAllApplication.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const ViewAllApplication = () => {
  const [applicant, setApplicant] = useState([]);
  const [search, setSearch] = useState("");
    const usersCollectionRef = collection(db, "users");
    
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setApplicant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    // eslint-disable-next-line
  }, []);

  console.log(applicant);
  return (
    <div>
      {applicant.length > 0 ? (
        <>
          <div className="viewUsers viewAll ">
            <div className="viewUsers__wrapper container">
              <div className="card mt-4">
                <div className="card-header d-flex justify-content-between p-4">
                  <div className="col-6">
                    <h3>All Applicant</h3>
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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">State Of Origin</th>
                        <th scope="col">Gender</th>
                        <th scope="col">BVN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicant
                        .filter((val) =>
                          val.firstName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        )
                        .map((item, index) => (
                          <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.firstName + " " + item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.stateOfOrigin}</td>
                            <td>{item.gender}</td>
                            <td>{item.bvn}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container applicationZero">
          <h2>No Applicant yet</h2>
        </div>
      )}
    </div>
  );
};

export default ViewAllApplication;
