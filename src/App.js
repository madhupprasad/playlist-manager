import React, { Component } from "react";
import { start } from "./firebase";

class App extends Component {
  componentDidMount() {
    start();
  }
  render() {
    return (
      <div>
        <div id="firebaseui"></div>
        <div id="loader">Loading...</div>
      </div>
    );
  }
}

export default App;
