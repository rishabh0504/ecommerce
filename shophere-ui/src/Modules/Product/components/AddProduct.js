import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import history from "../../Common/history";

import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userAlreadySignin } from "../../UserManagement/actions/SigninActionCreator";
import { bindActionCreators } from "redux";

export default class AddProduct extends Component {
  render() {
    return (
        <div className='row'>
            <div className='col-sm-12'>Ad products here</div>
        </div>
    );
  }
}
