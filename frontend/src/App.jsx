import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Navbar from "./components/navbar";

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
      </Routes>
    </>
  );
}

export default App;
