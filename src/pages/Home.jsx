import React, { Component } from "react";
import { ReactHeader } from "../components/Headers";

class Home extends Component {
  render() {
    return (
      <div>
        <ReactHeader />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
