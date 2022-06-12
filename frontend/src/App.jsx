import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Navbar from "./components/navbar";
import DetailUser from "./pages/DetailUser";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <>
      <Typography variant="h3">Hello World</Typography>
      <Typography variant="body1">
        User CRUD application made with : Monggo, Express, React, Node, Material
        UI
      </Typography>
      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/:_id" element={<DetailUser />} />
        <Route path="/update/:_id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
