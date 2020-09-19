//external dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//compnenents
import Home from "./pages/HomePage";
// import About from "./pages/AboutPage";
import Project from "./pages/ProjectPage";
import Nav from "./components/nav/Nav";

/**
 * Main app compnent
 */
function App() {
  return (
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
  );
}

export default App;
