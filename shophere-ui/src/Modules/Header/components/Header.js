import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import PreLoginHeader from "./PreLoginHeader";
import PostLoginHeader from "./PostLoginHeader";

//import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
//library.add(faCog, faUser);
class Header extends Component {
  componentDidMount() {}
  render() {
    let header;
    if (Cookies.get("token")) {
      header = (
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
                    style={{ width: "100%" }}
                    src={require("../../../Images/logo.png")}
                  />
                </Link>
              </div>
              <div className="col-sm-9">
                <PostLoginHeader />
              </div>
            </nav>
          </div>
        </div>
      );
    } else {
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
                style={{ width: "100%" }}
                src={require("../../../Images/logo.png")}
              />
            </Link>
          </div>
          <div className="col-sm-9">
            <PreLoginHeader />
          </div>
        </nav>
      </div>
    </div>

    }
    return header;
  }
}
const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};
export default connect(mapStateToProps)(Header);
