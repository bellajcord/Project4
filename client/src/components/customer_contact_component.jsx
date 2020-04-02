import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    contacts: [],
    contact: {
      name: "",
      phone_number: "",
      customer_address: "",
      order_history: ""
    },
    newContact: {
      name: "",
      phone_number: "",
      customer_address: "",
      order_history: ""
    },
    addContactInvisable: false
  };
  
  toggleAddContactForm = () => {
    const toggle = !this.state.addContactInvisable;
    this.setState({ addContactInvisable: toggle });
  };

  componentDidMount = () => {
    axios.get("/api/v1/contacts/").then(res => {
      this.setState({ contacts: res.data });
    });
  };

  handleNewFormChange = evt => {
    const attribute = evt.target.name;
    const contact = { ...this.state.contact };
    contact[attribute] = evt.target.value;
    this.setState({contact: contact});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.contact)
    axios.post("/api/v1/contacts/", this.state.contact).then(() => {
      this.setState({
        newContact: {
          name: "",
          phone_number: "",
          customer_address: "",
          order_history: ""
        }
      });
    });
    this.componentDidMount();
  };


  render() {
    const allContacts = this.state.contacts.map(contact => {
      return (
        <Link className="previewAllInside" to={`/contacts/${contact.id}`}>
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
            <form onSubmit={this.handleSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newContact.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone_number"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newContact.phone_number}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Address"
                  name="customer_address"
                  onChange={this.handleNewFormChange}
                 // value={this.state.newContact.customer_address}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Order History"
                  name="order_history"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newContact.order_history}
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
