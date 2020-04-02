import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    Orders: [],
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
  componentDidMount() {
    this.reloadOrdersPage();
  }
  reloadOrdersPage = () => {
    axios.get("/api/v1/Order/").then(res => {
      this.setState({ Order: res.data });
    });
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newOrder[name] = value;
    this.setState(copyOfState);
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newOrder[name] = value;
    this.setState(copyOfState);
  };
  onSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/v1/Order/", this.state.newContact).then(() => {
      this.reloadContactsPage();
      this.toggleAddContactForm();
      const copyOfState = { ...this.state };
      copyOfState.newOrder = {
        name: "",
      product: "",
      dimensions: "",
      color: "",
      order_date: "",
      due_date: "",
      cost:"",
      deposit: "",
      };
      this.setState(copyOfState);
    });
  };
  toggleAddOrderForm = () => {
    const toggle = !this.state.addOrderInvisable;
    this.setState({ addOrderInvisable: toggle });
  };

  render() {
    const allOrders = this.state.Orders.map(Order => {
      return (
        <Link className="previewAllInside" to={`/Order/${order.id}`}>
          <div className="singleContainer">{Order.name}</div>
        </Link>
      );
    });

    return (
      <div className="contacts-container">
        <h1>Orders</h1>
        {this.state.addOrderInvisable === false ? (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddOrderForm}
            >
              Add Order
            </button>
          </div>
        ) : (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddOrderForm}
            >
              Back
            </button>
          </div>
        )}
        {this.state.addOrderInvisable === false ? (
          <div className="list">{allOrders}</div>
        ) : null}
        {this.state.addOrderInvisable === true ? (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.newOrder.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="product"
                  name="product"
                  onChange={this.onChange}
                  value={this.state.newOrder.product}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="dimensions"
                  name="dimensions"
                  onChange={this.onChange}
                  value={this.state.newOrder.dimensions}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="color"
                  name="color"
                  onChange={this.onChange}
                  value={this.state.newOrder.color}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Order Date"
                  name="order_date"
                  onChange={this.onChange}
                  value={this.state.newOrder.order_date}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Due Date"
                  name="due_date"
                  onChange={this.onChange}
                  value={this.state.newOrder.due_date}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Cost"
                  name="cost"
                  onChange={this.onChange}
                  value={this.state.newOrder.cost}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Deposit"
                  name="deposit"
                  onChange={this.onChange}
                  value={this.state.newOrder.deposit}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input type="submit" value="Create"></input>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
