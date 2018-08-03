import React, { Component } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages";
import { AppContainer } from "./components/Containers";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet title="Cool!" />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </AppContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
