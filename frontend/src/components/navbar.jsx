import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </header>
  );
}

export default Navbar;
