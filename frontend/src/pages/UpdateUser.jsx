import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${params._id}`
        );
        const user = response.data;
        console.log(response.data);
        setUserName(user.name);
        setUserEmail(user.email);
        setUserPassword(user.password);
      } catch (err) {}
    }
    getUser();
  }, [params._id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .patch(`http://localhost:5000/users/${params._id}`, {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then(() => navigate("/"));
    } catch (err) {}
  }

  return (
    <>
      <Typography>Update</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Email</p>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
      <Link to="/">Cancel</Link>
    </>
  );
}

export default UpdateUser;
