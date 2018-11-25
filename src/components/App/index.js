import React, { Component } from "react";
import logo from "./../../logo.svg";
import "./style.scss";

import Header from "./../Header"; //  import Header from "../Header"    <Header />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="header-contain">222</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
