import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
      <div>

        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/Saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
