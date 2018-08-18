import React, { Component } from "react";

import Product from "./Product";
class Products extends Component {
	
	 
render() {
    return (
      <div className="row product-dashboard">
        <div className="col-sm-3" />
        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <br />
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <div className="col-sm-3">
              <Product className="product" />
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

 
 export default Products;
 