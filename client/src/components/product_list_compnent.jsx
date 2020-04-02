import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Product extends Component {
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
    axios.get("/api/v1/Product/").then(res => {
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
    axios.post("/api/v1/Product/", this.state.newProduct).then(() => {
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
  toggleAddProductForm = () => {
    const toggle = !this.state.addProductInvisable;
    this.setState({ addProductInvisable: toggle });
  };

  render() {
    const allProducts = this.state.Products.map(product => {
      return (
        <Link className="previewAllInside" to={`/Product/${product.id}`}>
          <div className="singleContainer">{Product.name}</div>
        </Link>
      );
    });

    return (
      <div className="contacts-container">
        <h1>Products</h1>
        {this.state.addProductInvisable === false ? (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddProductForm}
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.toggleAddProductForm}
            >
              Back
            </button>
          </div>
        )}
        {this.state.addProductInvisable === false ? (
          <div className="list">{allProducts}</div>
        ) : null}
        {this.state.addProductInvisable === true ? (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.newProduct.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="descriptio"
                  name="description"
                  onChange={this.onChange}
                  value={this.state.newProduct.description}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 1"
                  name="Material 1"
                  onChange={this.onChange}
                  value={this.state.newProduct.material1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 1"
                  name="material_quantity1"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 2"
                  name="Material 2"
                  onChange={this.onChange}
                  value={this.state.newProduct.material2}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 2"
                  name="material_quantity2"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity2}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 3"
                  name="Material 3"
                  onChange={this.onChange}
                  value={this.state.newProduct.material3}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 3"
                  name="material_quantity3"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity3}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 1"
                  name="Material 1"
                  onChange={this.onChange}
                  value={this.state.newProduct.material1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 4"
                  name="material_quantity4"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity4}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 5"
                  name="Material 5"
                  onChange={this.onChange}
                  value={this.state.newProduct.material1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 5"
                  name="material_quantity5"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity5}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 1"
                  name="Material 1"
                  onChange={this.onChange}
                  value={this.state.newProduct.material1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 6"
                  name="material_quantity6"
                  onChange={this.onChange}
                  value={this.state.newProduct.material_quantity6}
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
