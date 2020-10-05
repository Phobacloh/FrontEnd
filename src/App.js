//external dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//componenents
import Home from "./pages/HomePage";
// import About from "./pages/AboutPage";
import Project from "./pages/ProjectPage";
import Nav from "./components/nav/Nav";
import Logo from "./BookShelves-Tagline.png";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostProjectPage from "./pages/PostProjectPage";
import ProfilePage from "./pages/ProfilePage";
import CategoriesPage from "./pages/CategoriesPage";
import PledgePage from "./pages/PledgePage";
/**
 * Main app component
 */

function App() {
  return (
    <div>
      <img className="logo" src={Logo} alt="GoBookYourself Logo" />
      <Router>
        <div>
          <Nav />
          {/* <Categories/> */}
          <Switch>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/post_project">
              <PostProjectPage />
            </Route>
            <Route path="/profile/:id">
              <ProfilePage />
            </Route>
            <Route path="/categories">
              <CategoriesPage />
            </Route>
            <Route path="/pledge">
              <PledgePage />
            </Route>
            {/* <Route>

            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
