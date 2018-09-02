import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser,faSliders } from "@fortawesome/free-solid-svg-icons";
library.add(faCog, faUser,faSliders);
class Header extends Component {
  state = {
    privateContents: [
      { User: "user", icon: "user" },
      { Settings: "settings", icon: "cog" },
      { Logout: "logout", icon: "cog" }
    ],
    publicContents: [
      { Products: "products", icon: "cog" },
      { SignIn: "signin", icon: "cog" }
    ],
    userSpecificDetails: [
      { User: "user", icon: "user" },
      { Settings: "settings", icon: "cog" },
      { Logout: "logout", icon: "cog" }
    ]
  };

  render() {
    console.log(this.props.loggedInUser);
    let dynamicHeader;
    if (Cookies.get("token")) {
      dynamicHeader = this.state.userSpecificDetails.map((item, index) => {
        const keys = Object.keys(item);
        return (
          <NavLink
            key={index}
            className="dropdown-item"
            style={{ background: "transparent", opacity: "0.90" }}
            to={`/${item[Object.keys(item)[0]]}`}
          >
            {item[keys[0]]}{" "}
            <span style={{ float: "right" }}>
              &nbsp;
              <FontAwesomeIcon icon={`${item[keys[1]]}`} />
            </span>
          </NavLink>
        );
      });
      console.log(dynamicHeader);
    } else {
      dynamicHeader = this.state.publicContents.map((item, index) => {
        return (
          <li className="nav-item nav-margin" key={index}>
            <NavLink
              className=""
              style={{ textDecoration: "none", color: "white" }}
              to={`/${item[Object.keys(item)[0]]}`}
            >
              {Object.keys(item)[0]}
            </NavLink>
          </li>
        );
      });
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <nav
            style={{ paddingLeft: "2%", paddingRight: "2%" }}
            className="navbar navbar-expand-sm bg-info navbar-dark"
          >
            <div className="col-sm-9">
              <Link
                className="navbar-brand shophere-header"
                style={{ width: "50%" }}
                to={"/"}
              >
                <img
                  className="logo"
                  style={{ width: "25%" }}
                  src={require("../../../Images/logo.png")}
                />
              </Link>
            </div>
            <div className="col-sm-3">
              <div className="dropdown dropleft float-right">
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-toggle="dropdown"
                />
                <div className="dropdown-menu">{dynamicHeader}</div>
              </div>
            </div>
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
