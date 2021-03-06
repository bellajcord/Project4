import React, { Component } from "react";
import axios from "axios";
import NavBar from "./Navbar_component";
import './css/order_styles.css';

export default class Order extends Component {
  state = {
    orders: [],
    order: {
      name: "",
      product: "",
      dimensions: "",
      color: "",
      order_date: "",
      due_date: "",
      cost:"",
      deposit: "",
    },
    newOrder: {
      name: "",
      product: "",
      dimensions: "",
      color: "",
      order_date: "",
      due_date: "",
      cost:"",
      deposit: "",
    },
    addOrderInvisable: false
  };

  toggleAddOrderForm = () => {
    const toggle = !this.state.addOrderInvisable;
    this.setState({ addOrderInvisable: toggle });
  };

  componentDidMount = () => {
    axios.get("/api/v1/orders/").then(res => {
      this.setState({ orders: res.data });
    });
  };

  handleNewFormChange = evt => {
    const attribute = evt.target.name;
    const order = { ...this.state.order };
    order[attribute] = evt.target.value;
    this.setState({order: order});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.order)
    this.toggleAddOrderForm()
    axios.post("/api/v1/orders/", this.state.order).then(() => {
      this.setState({
        newOrder: {
          name: "",
          product: "",
          dimensions: "",
          color: "",
          order_date: "",
          due_date: "",
          cost:"",
          deposit: "",
        }
      });
    });
    this.componentDidMount();
  };

  render() {
    const allOrders = this.state.orders.map(order => {
      return (
        <div className="previewAllInsideOrders">
          <div className="singleContainerOrders">
          <ul key={order.id}>
          <h3>{order.name}</h3>
          <li>Product: {order.product}</li>
          <li>Dimensions: {order.dimensions}</li>
          <li>Color: {order.color}</li>
          <li>Order Date: {order.order_date}</li>
          <li>Due: {order.due_date}</li>
          <li>Cost: ${order.cost}</li>
          <li>Deposit: ${order.deposit}</li>
          </ul>
          </div>
        </div>
      );
    });

    return (
      <div className="contacts-container">
      <div><NavBar /></div>
        <h1>Orders</h1>
        {this.state.addOrderInvisable === false ? (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddOrderForm}
            ><span>Add Order</span>
              
            </button>
          </div>
        ) : (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddOrderForm}
            ><span>Back</span>
              
            </button>
          </div>
        )}
        {this.state.addOrderInvisable === false ? (
          <div className="list">{allOrders}</div>
        ) : null}
        {this.state.addOrderInvisable === true ? (
          <div>
            <form className="product_form" onSubmit={this.handleSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="product"
                  name="product"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.product}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="dimensions"
                  name="dimensions"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.dimensions}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="color"
                  name="color"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.color}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  name="order_date"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.order_date}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  name="due_date"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.due_date}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Cost"
                  name="cost"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.cost}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Deposit"
                  name="deposit"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.deposit}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input className="submit-button" type="submit" value="Create"></input>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
