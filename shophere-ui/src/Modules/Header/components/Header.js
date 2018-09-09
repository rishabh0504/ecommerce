import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <nav
            style={{ paddingLeft: "2%", paddingRight: "2%" }}
            className="navbar navbar-expand-sm bg-info navbar-dark"
          >
            <div className="col-sm-3">
              <Link
                className="navbar-brand shophere-header"
                style={{ width: "50%" }}
                to={"/"}
              >
                <img
                  className="logo"
                  style={{ width: "60%" }}
                  src={require("../../../Images/logo.png")}
                />
              </Link>
            </div>
            <div className="col-sm-9"> </div>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};
export default connect(mapStateToProps)(Header);
