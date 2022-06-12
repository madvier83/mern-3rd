import React from "react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getUser();
  }, [reload]);

  async function deleteUser(_id) {
    try {
      await axios
        .delete("http://localhost:5000/users/" + _id)
        .then(console.log("User Deleted"));
      setReload(reload + 1);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <Typography>Home</Typography>
      <br />
      {users.map(function (user) {
        return (
          <ul key={user._id}>
            <li>Username : {user.name}</li>
            <li>Email : {user.email}</li>
            <li>
              <Link to={"/" + user._id}>Details</Link>
            </li>
            <li>
              <Link to={"update/" + user._id}>Update</Link>
            </li>
            <li>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </li>
            <br />
          </ul>
        );
      })}
    </>
  );
}

export default Home;
