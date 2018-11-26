import React, { Component } from "react";
import "./style.scss";
import OrderItem from "../OrderItem";

class index extends Component {
  render() {
    return (
      <div className="OrderList">
        <OrderItem/>
      </div>
    );
  }
}

export default index;


