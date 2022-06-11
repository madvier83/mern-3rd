import React from "react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
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
  }, []);

  return (
    <>
      <Typography>Home</Typography>
      {users.map(function (user) {
        return (
          <ul key={user._id}>
            <li>Username : {user.name}</li>
            <li>Email : {user.email}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Home;
