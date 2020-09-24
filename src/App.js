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
