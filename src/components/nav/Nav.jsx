import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  isAuthenticated,
  clearStorage,
  getStorage,
} from "../utils/localStorage.jsx";
// import "./Nav.css";

function Nav() {
  //variables
  const [isloggedin, setisloggedin] = useState(false);
  const location = useLocation();
  //method
  useEffect(() => {
    isAuthenticated() ? setisloggedin(true) : setisloggedin(false);
  }, [location]);
  const handleLogout = () => {
    clearStorage();
  };
  let user = window.localStorage.getItem("username");
  console.log(user);
  //template
  return (
    <div>
      <nav className="nav_bar">
        <Link id="home-link" to="/">
          Home
        </Link>
        {isloggedin ? (
          <Link id="nav-link" to="/login" onClick={handleLogout}>
            Hello, {user} Logout {getStorage("user")}
          </Link>
        ) : (
          <Link id="nav-link" to="/login">
            Login
          </Link>
        )}
        <Link to="/post_project">New Project</Link>
      </nav>
    </div>
  );
}

export default Nav;
