import React, { Component } from "react";
import styles  from "./style.scss";
console.log(styles)
class index extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-contain">
          <div className="header-box">
            <p className="header-title">评价列表</p>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
