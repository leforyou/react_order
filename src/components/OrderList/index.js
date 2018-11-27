import React, { Component } from "react";
import "./style.scss";
import OrderItem from "../OrderItem";

/*import img1 from './../../img/1.jpg';
import img2 from './../../img/2.jpg';
import img3 from './../../img/3.jpg';
import img4 from './../../img/4.jpg';
import img5 from './../../img/5.jpg';


const data = [
  {
    id:1,
    shop:'院落创意菜',
    picture:img1,
    product:'百香果（冷饮）1扎',
    price:'19.9',
    ifCommented:true
  },{
    id:2,
    shop:'正一味',
    picture:img2,
    product:'肥牛石锅拌饭+鸡蛋羹1份',
    price:'38.98',
    ifCommented:false
  },{
    id:3,
    shop:'Salud冻酸奶',
    picture:img3,
    product:'冻酸奶（小杯）1杯',
    price:'20',
    ifCommented:false
  },{
    id:4,
    shop:'吉野家',
    picture:img4,
    product:'吉汁烧鱼+中杯汽水/紫菜蛋花汤1份',
    price:'25.8',
    ifCommented:true
  },{
    id:5,
    shop:'美味蒸包',
    picture:img5,
    product:'小笼包1份（12个）',
    price:'9.9',
    ifCommented:true
  }
];
*/

class OrderList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount(){
    fetch('/mock/order.json').then(res=>{//原生API相当ajax的功能
      if(res.ok){
        res.json().then(data=>{
          data.forEach((element,index) => {
            element.picture = `/img/${index+1}.jpg`
          });
          this.setState({
            data
          })
        });
      }
    })
  }
  render() {
    return (
      <div className="OrderList">
        {
          this.state.data.map(item=>{
            return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>
          })
        }
      </div>
    );
  }

  handleSubmit = (id , comment , stars) => {
    //提交数据
    const newData = this.state.data.map( item => {
      return item.id === id ? {
        ...item , comment , stars , ifCommented : true
      } : item;
    });
    this.setState({
      data:newData
    });
  }
}

export default OrderList;


