import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import Signin from "../UserManagement/components/Signin.js";
import Signup from "../UserManagement/components/Signup.js";
import Products from '../Product/components/Products';

export default class Body extends Component {
  render() {
    return (
      <div className="row body">
        <div className="col-sm-12">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/signup" component={Signup} />
             <Route exact path="/signin" component={Signin} />
          </Switch>
        </div>
      </div>
    );
  }
}