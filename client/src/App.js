import React, { Component } from "react";
import "./styles/App.css";
import Home from "./views/home";
import { startFirebaseUI } from "./components/firebase.js";
import { Router } from "@reach/router";
import { Login } from "./views/login";

class App extends Component {
  componentDidMount() {
    startFirebaseUI();
  }

  render() {
    return (
      <Router>
        <Login path="/"></Login>
        <Home path="/home"></Home>
      </Router>
    );
  }
}

export default App;
