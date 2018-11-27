import React, { Component } from "react";
import "./style.scss";

export default class OrderItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing:false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || ''
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
                    <button className="red" onClick={this.handleOpenEditArea}>评价</button>
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
        <textarea onChange={this.handleCommentChange} value={this.state.comment}></textarea>
        {
          this.renderStars()
        }
        <div className="group-button fz10">
          <button className="sure" onClick={this.handleSubmitComment}>提交</button>
          <button className="cancel" onClick={this.handleCancelComment}>取消</button>
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
            const light = (stars >= item) ? 'active':'grey';
            return (
              <span className={light} key={index} onClick={this.handleClickStars.bind(this,item)}>★</span>
            )
          })
        }
      </div>
    )
  }

  handleOpenEditArea = ()=>{
    //显示评价内容区域
    this.setState({
      editing:true
    });
  }

  handleCommentChange = (e)=>{
    //textarea输入框：双向数据绑定
    this.setState({
      comment:e.target.value
    });
  }

  handleClickStars = (stars)=>{
    //评价星星
    this.setState({
      stars:stars
    });
  }

  handleCancelComment = ()=>{
    //取消
    this.setState({
      editing:false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || ''
    });
  }

  handleSubmitComment = ()=>{
    //提交
    const { id } = this.props.data;
    const { comment , stars } = this.state;
    this.setState({
      editing:false
    });
    this.props.onSubmit(id , comment , stars);//调用父组件OrderList的方法，提交数据。
  }

}

