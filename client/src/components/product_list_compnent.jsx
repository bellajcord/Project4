import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
  state = {
    Products: [],
    newProduct: {
        name: "",
        description: "",
      sample_img: "",
      material1: "",
      material_quantity1: "",
      material2: "",
      material_quantity2: "",
      material3: "",
      material_quantity3: "",
      material4: "",
      material_quantity4: "",
      material5: "",
      material_quantity5: "",
      material6: "",
      material_quantity6: "",
    },
    addProductInvisable: false
  };
  componentDidMount() {
    this.reloadProductsPage();
  }
  reloadProductsPage = () => {
    axios.get("/api/v1/ProductList/").then(res => {
      this.setState({ Products: res.data });
    });
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newProduct[name] = value;
    this.setState(copyOfState);
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newProduct[name] = value;
    this.setState(copyOfState);
  };
  onSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/v1/ProductList/", this.state.newProduct).then(() => {
      this.reloadProductsPage();
      this.toggleAddContactForm();
      const copyOfState = { ...this.state };
      copyOfState.newContact = {
        name: "",
        description: "",
      sample_img: "",
      material1: "",
      material_quantity1: "",
      material2: "",
      material_quantity2: "",
      material3: "",
      material_quantity3: "",
      material4: "",
      material_quantity4: "",
      material5: "",
      material_quantity5: "",
      material6: "",
      material_quantity6: "",
      };
      this.setState(copyOfState);
    });
  };
  toggleAddContactForm = () => {
    const toggle = !this.state.addContactInvisable;
    this.setState({ addContactInvisable: toggle });
  };

  render() {
    const allContacts = this.state.contacts.map(contact => {
      return (
        <Link className="previewAllInside" to={`/CustomerContact/${contact.id}`}>
          <div className="singleContainer">{CustomerContact.name}</div>
        </Link>
      );
    });

    return (
      <div className="contacts-container">
        <h1>Contacts</h1>
        {this.state.addContactInvisable === false ? (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddContactForm}
            >
              Add Contact
            </button>
          </div>
        ) : (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddContactForm}
            >
              Back
            </button>
          </div>
        )}
        {this.state.addContactInvisable === false ? (
          <div className="list">{allContacts}</div>
        ) : null}
        {this.state.addContactInvisable === true ? (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.newContact.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="company"
                  name="company"
                  onChange={this.onChange}
                  value={this.state.newContact.phone_number}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  onChange={this.onChange}
                  value={this.state.newContact.customer_address}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="order history"
                  name="order_history"
                  onChange={this.onChange}
                  value={this.state.newContact.order_history}
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
