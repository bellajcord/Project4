import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    contacts: [],
    newContact: {
      name: "",
      phone_number: "",
      customer_address: "",
      order_history: ""
    },
    addContactInvisable: false
  };
  componentDidMount() {
    this.reloadContactsPage();
  }
  reloadContactsPage = () => {
    axios.get("/api/contact/").then(res => {
      this.setState({ Contacts: res.data });
    });
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newContact[name] = value;
    this.setState(copyOfState);
  };
 
  onSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/contact/", this.state.newContact).then(() => {
      this.reloadContactsPage();
      this.toggleAddContactForm();
      const copyOfState = { ...this.state };
      copyOfState.newContact = {
        name: "",
        phone_number: "",
        customer_address: "",
        order_history: ""
      };
      this.setState(copyOfState);
    });
  };
  toggleAddContactForm = () => {
    const toggle = !this.state.addContactInvisable;
    this.setState({ addContactInvisable: toggle });
  };

  render() {
    const allContacts = this.state.contacts.map((contact) => {
      return (
        <Link className="previewAllInside" to={`/contact/${contact.id}`}>
          <div className="singleContainer">{contact.name}</div>
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
                  placeholder="Name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.newContact.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone_number"
                  onChange={this.onChange}
                  value={this.state.newContact.phone_number}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Address"
                  name="customer_address"
                  onChange={this.onChange}
                  value={this.state.newContact.customer_address}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Order History"
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
