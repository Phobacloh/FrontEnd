import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav_bar">
      <Link to="/">Home</Link>
      <Link to="/project">Projects</Link>
      {/* <Link to="/contact">Contact</Link> */}
    </nav>
  );
}

export default Nav;
