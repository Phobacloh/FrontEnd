import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav_bar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/post_project">New Project</Link>
      </nav>
    </div>
  );
}

export default Nav;
