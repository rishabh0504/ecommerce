import React, { Component } from "react";
import Signin from "../UserManagement/components/Signin.js";
import Signup from "../UserManagement/components/Signup.js";
import Products from "../Product/components/Products";
import AddProduct from "../Product/components/AddProduct";
import Product from "../Product/components/Product";

import { Switch, Route, Link } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <div className="row body">
        <div className="col-sm-2">
          <div className="list-group list-group-flush">
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
            >
              Products
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
            >
              Add Product
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
            >
              Third item
            </a>
            <Link
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
              to="/addProduct"
            >
              Add Product
            </Link>
          </div>
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/addProduct" component={AddProduct} />
          </Switch>
        </div>
      </div>
    );
  }
}
