import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { userAlreadySignin } from "../../UserManagement/actions/SigninActionCreator";
import { bindActionCreators } from "redux";
import "../assets/styles/postlogin.css";

//import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
//library.add(faCog, faUser);

class PostLoginHeader extends Component {
  state = {
    headerRoutes: [
      { products: "Products", type: "link" },
      {
        category: "Categories",
        type: "category",
        entries: [
          { male: "Men's Fashion" },
          { female: "Women's Fashion" },
          { baby: "Baby's Fashion" }
        ]
      },
      {
        user: "User",
        type: "category",
        entries: [
          { User: "User" },
          { Settings: "Setting" },
          { Logout: "Logout" }
        ]
      }
    ]
  };
  componentDidMount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      this.props.userAlreadySignin();
    }
  }
  render() {
    let header = this.state.headerRoutes.map((item, index) => {
      const keys = Object.keys(item);

      if (item[keys[1]] === "category") {
        console.log(item);
        const itemEntries = item.entries.map((entry, internalIndex) => {
          const entryKeys = Object.keys(entry);
          return (
            <li className="header-li-font-padding" key={internalIndex}>
              <a
                href="#"
                className="header-li-font-color header-font-size header-li-font-padding"
              >
                {entry[entryKeys[0]]}
              </a>
            </li>
          );
        });

        return (
          <div className="col-sm-1 header-font-size text-center" style={{'padding':'0%'}} key={index}>
            <a
              href="#"
              className="dropdown-toggle header-font-color"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              {item[keys[0]]} <span className="caret" />
            </a>
            <li
              className="dropdown open list-style-none  header-li-font-padding"
              key={index}
            >
              <ul
                className="dropdown-menu dropdownhover-top "
                role="menu"
                style={{ " top": "auto" }}
              >
                {itemEntries}
              </ul>
            </li>
          </div>
        );
      } else if (item[keys[1]] === "link") {
        return (
          <div className="col-sm-1 header-font-size text-center" key={index} style={{'padding':'0%'}}>
            <Link to={`/${keys[0]}`} className="header-font-color">
              {item[keys[0]]}
            </Link>
          </div>
        );
      }
      return header;
    });
    return <div className="row">{header}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.loggedInUser
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userAlreadySignin }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLoginHeader);
