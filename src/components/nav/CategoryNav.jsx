import React from "react";
import { Link } from "react-router-dom";

function CategoryNav() {
  return (
    <nav className="category_nav">
      <Link to="/">Home</Link>
      <Link to="/project">Projects</Link>
    </nav>
  );
}

export default Nav;
