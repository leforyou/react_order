import React, { Component } from "react";
import "./style.scss";
import index from "../Header";
//import img1 from './../../img/1.jpg';

export default class OrderItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing:false,
      stars:0
    }
  }
  render() {
    const {shop,product,price,picture,ifCommented} = this.props.data;
    return (
      <div className="OrderItem">
        <div className="box">
          <div className="img-box">
            <p style={{'backgroundImage':'url('+picture+')'}}>{/*img1 图片* */}</p>
          </div>
          <div className="info">
            <div className="head">
              <div className="product ellipsis1 fz15">{product /*产品名称*/}</div>
              <div className="business ellipsis1 fz14">{shop /*商家名称*/}</div>
            </div>
            <div className="foot">
              <div className="price fz14">￥{price /*价格*/}</div>
              <div className="btn fz12">
                {
                  /*jsx的三元表达式渲染DOM*/
                  ifCommented?(
                    <button className="grey">已评价</button>
                  ):(
                    <button className="red">评价</button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        { this.state.editing ? this.renderEditArea() : null }
      </div>
    );
  }

  renderEditArea(){
    return (
      <div className="evaluate">
        <textarea></textarea>
        {
          this.renderStars()
        }
        <div className="group-button fz10">
          <button className="sure">提交</button>
          <button className="cancel">取消</button>
        </div>
      </div>
    )
  }

  renderStars(){
    const { stars } = this.state;
    return (
      <div className="group-stars">
        {
          [1,2,3,4,5].map((item,index)=>{
            const light = (stars >= item) ? 'yellow':'grey';
            return (
              <span key={index}>★</span>
            )
          })
        }
      </div>
    )
  }

}

