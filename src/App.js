//external dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./BookShelves-Tagline.png";

//componenents
import Home from "./pages/HomePage";
// import About from "./pages/AboutPage";
import Project from "./pages/ProjectPage";
import Nav from "./components/nav/Nav";
import "./App.css";
import Logo from "./BookShelves-Tagline.png";

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
          <Switch>
            <Route path="/project">
              <Project />
            </Route>
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
