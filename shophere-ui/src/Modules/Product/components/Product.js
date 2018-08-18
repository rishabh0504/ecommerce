import React, { Component } from "react";
import {  Link } from "react-router-dom";
class Product extends Component {
  render() {
    return (
      <div className="card product-card">
        <img
          className="card-img-top product-image"
          src="https:\/\/cdn.shopify.com\/s\/files\/1\/0000\/2442\/products\/shopify_shirt.png?v=1155241139"
        />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text.</p>
          <Link className="btn btn-success btn-sm" to={"/productDetail"}>
            Detail
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
