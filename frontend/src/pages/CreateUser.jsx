import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/users", {
          name: userName,
          email: userEmail,
          password: userPassword,
        })
        .then(() => {
          navigate("/");
        });
    } catch (err) {}
  }
  return (
    <>
      <Typography>Create</Typography>
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
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default CreateUser;
