import axios from "../api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details");
      }
    };
    fetchUser();
  }, [id]);
  return (
    <div>
      {user ? (
        <div className="">
     <span className="container m-3">
       <h2> {user.name} </h2>
     </span> 
          <div className="card container ">
            <p className="card-title ms-5 mt-5">Name: {user.name} </p>
            <p className="small-desc ms-5">Username: {user.username}</p>
            <p className="small-desc ms-5">Email: {user.email}</p>
            <p className="small-desc ms-5">Phone: {user.phone}</p>
            <p className="small-desc ms-5">Website: {user.website}</p>
            <p className="small-desc ms-5">Company: {user.company.name} Inc.</p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <div className="cell d-0"></div>
          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-2"></div>
          <div className="cell d-3"></div>

          <div className="cell d-3"></div>
          <div className="cell d-4"></div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
