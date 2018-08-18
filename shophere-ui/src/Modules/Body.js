import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
/*import Products from "./Product/components/Products.js";*/
import Signin from "./UserManagement/components/Signin.js";
import Signup from "./UserManagement/components/Signup.js";
import ProductDetail from './Product/components/ProductDetail.js';

export default class Body extends Component {
  render() {
    return (
      <div className="row body">
        <div className="col-sm-12">
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
             <Route exact path="/signin" component={Signin} />
          </Switch>
        </div>
      </div>
    );
  }
}


/*<Switch>
  <Route exact path="/" component={Products} />
  <Route exact path="/" component={Signin} />
  <Route exact path="/productDetail" component={ProductDetail} />
</Switch>
*/