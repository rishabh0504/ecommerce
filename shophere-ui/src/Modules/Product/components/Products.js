import React, { Component } from "react";

import Product from "./Product";
import AddProduct from './AddProduct';
import { Switch, Route, Link } from "react-router-dom";

import "../../Header/assets/styles/postlogin.css";
class Products extends Component {
  render() {
    return (
      <div className="row product-dashboard">
        <div className="col-sm-12">
              <h1>Product dashboard</h1>
        </div>
      </div>
    );
  }
}

export default Products;
