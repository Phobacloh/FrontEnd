import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav_bar">
        <Link to="/">Home</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
    </div>
  );
}

export default Nav;
