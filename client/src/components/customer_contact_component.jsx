import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    contacts: [],
    newContact: {
      customer_name: "",
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
    axios.get("/api/v1/contact/").then(res => {
      this.setState({ contacts: res.data });
    });
  };
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    const copyOfState = { ...this.state };
    copyOfState.newContact[name] = value;
    this.setState(copyOfState);
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
    axios.post("/api/v1/contact/", this.state.newContact).then(() => {
      this.reloadContactsPage();
      this.toggleAddContactForm();
      const copyOfState = { ...this.state };
      copyOfState.newContact = {
        customer_name: "",
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
    const allContacts = this.state.contacts.map(contact => {
      return (
        <Link className="previewAllInside" to={`/contact/${contact.id}`}>
          <div className="singleContainer">{contact.customer_name}</div>
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
                  vlaue={this.state.newContact.customer_name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="company"
                  name="company"
                  onChange={this.onChange}
                  vlaue={this.state.newContact.phone_number}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  onChange={this.onChange}
                  vlaue={this.state.newContact.customer_address}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="order history"
                  name="order_history"
                  onChange={this.onChange}
                  vlaue={this.state.newContact.order_history}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input type="submit" vlaue="Create"></input>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
