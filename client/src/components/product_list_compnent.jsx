import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./Navbar_component";
import './css/product_styles.css';

export default class Product extends Component {
  state = {
    products: [],
    product: {
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
      material_quantity6: ""
    },
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
      material_quantity6: ""
    },
    addProductInvisable: false
  };

  toggleAddProductForm = () => {
    const toggle = !this.state.addProductInvisable;
    this.setState({ addProductInvisable: toggle });
  };

  componentDidMount = () => {
    axios.get("/api/v1/products/").then(res => {
      this.setState({ products: res.data });
    });
  };

  handleNewFormChange = evt => {
    const attribute = evt.target.name;
    const product = { ...this.state.product };
    product[attribute] = evt.target.value;
    this.setState({ product: product });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.product);
    axios.post("/api/v1/products/", this.state.product).then(() => {
      this.setState({
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
          material_quantity6: ""
        }
      });
    });
    this.componentDidMount();
  };

  render() {
    const allProducts = this.state.products.map(product => {
      return (
        <section className="previewAllInside">
          <div className="img-sample">{product.sample_img}</div>
          <div className="singleContainer">Name:{product.name}</div>
          <div className="description">Description:{product.description}</div>
          <table id="materials-list">
            <tbody>
              <tr>
                <td>{product.material1}</td>
                <td>{product.material_quantity1}</td>
              </tr>
              <tr>
                <td>{product.material2}</td>
                <td>{product.material_quantity2}</td>
              </tr>
              <tr>
                <td>{product.material3}</td>
                <td>{product.material_quantity3}</td>
              </tr>
              <tr>
                <td>{product.material4}</td>
                <td>{product.material_quantity4}</td>
              </tr>
              <tr>
                <td>{product.material5}</td>
                <td>{product.material_quantity5}</td>
              </tr>
              <tr>
                <td>{product.material6}</td>
                <td>{product.material_quantity6}</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    });

    return (
      <div className="contacts-container">
        <div>
          <NavBar />
        </div>
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
            <form onSubmit={this.handleSubmit}>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={this.handleNewFormChange}
                  //  value={this.state.newProduct.name}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  onChange={this.handleNewFormChange}
                  //  value={this.state.newProduct.description}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Image"
                  name="sample_img"
                  onChange={this.handleNewFormChange}
                  //  value={this.state.newProduct.sample_img}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 1"
                  name="material1"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 1"
                  name="material_quantity1"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material_quantity1}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 2"
                  name="material2"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material2}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 2"
                  name="material_quantity2"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material_quantity2}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 3"
                  name="material3"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newProduct.material3}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 3"
                  name="material_quantity3"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material_quantity3}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 4"
                  name="material4"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material4}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 4"
                  name="material_quantity4"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newProduct.material_quantity4}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 5"
                  name="material5"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newProduct.material5}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 5"
                  name="material_quantity5"
                  onChange={this.handleNewFormChange}
                  // value={this.state.newProduct.material_quantity5}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Material 6"
                  name="material6"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newProduct.material6}
                ></input>
              </div>
              <div className="inputBoxDiv">
                <input
                  type="text"
                  placeholder="Quantity 6"
                  name="material_quantity6"
                  onChange={this.handleNewFormChange}
                  //value={this.state.newProduct.material_quantity6}
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
