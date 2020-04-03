import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    this.setState({orders: res.data});
  });
};

handleNewFormChange = evt => {
  const attribute = evt.target.name;
  const order = {...this.state.order};
  order[attribute] = evt.target.value;
  this.setState({order: order});
};

handleSubmit = evt => {
  evt.preventDefault();
  console.log(this.state.order)
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
        <Link className="previewAllInside" to={`/orders/${order.id}`}>
          <div className="singleContainer">{order.name}</div>
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
            <form onSubmit={this.handleSubmit}>
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
                  placeholder="Order Date"
                  name="order_date"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newOrder.order_date}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Due Date"
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
                <input type="submit" value="Create"></input>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
