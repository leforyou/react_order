import React, { Component } from "react";
//import logo from "./../../logo.svg";
import "./style.scss";

import Header from "./../Header"; //  import Header from "../Header"    <Header />
import OrderList from "../OrderList";

class App extends Component {
  /**注释：可多行
   * 
   * 
   */

  render() {
    return (
      <div className="App">
        <Header />
        <OrderList/>



        {/*标签注释, 用 {} 包围
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
        */}


      </div>
    );
  }
}

export default App;
