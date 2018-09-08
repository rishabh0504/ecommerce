import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userAlreadySignin } from "../../UserManagement/actions/SigninActionCreator";
import { bindActionCreators } from "redux";
import "../assets/styles/postlogin.css";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import history from "../../Common/history";

//import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
//library.add(faCog, faUser);

class PostLoginHeader extends Component {
  state = {
    headerRoutes: [
      { Products: "products", type: "link" },
      {
        Categories: "category",
        type: "category",
        entries: [
          {  "Men's Fashion":'products' },
          {  "Women's Fashion":'products' },
          { "Baby's Fashion" : 'products' }
        ]
      }
    ],
    user: {}
  };
  componentDidMount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      this.props.userAlreadySignin();
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState(
        {
          user: newProps.user.loggedInUser
        },
        () => {
          if (Cookies.get("token")) {
            console.log(this.state, newProps);
            let user = {};
            user.You = this.state.user.username;
            (user.type = "category"),
              (user.entries = [
                { "Settings": "setting" },
                { "Logout": "logout" },
                { "My Orders": "orders" },
                { "My Wishlist": "wishlist" }
              ]);
            this.setState(
              { headerRoutes: [...this.state.headerRoutes, user] },
              () => {
                history.push("/products");
              }
            );
          }
        }
      );
    }
  }

  handleRoutes = () => {
    this.props.history.push("/products");
  };
  render() {
    let header = this.state.headerRoutes.map((item, index) => {
      const keys = Object.keys(item);

      if (item[keys[1]] === "category") {
        const itemEntries = item.entries.map((entry, internalIndex) => {
          const entryKeys = Object.keys(entry);
          return (
            <li className="header-li-font-padding" key={internalIndex}>
              
              <Link  className='header-li-font-color header-font-size' to={entry[entryKeys[0]]}>{entryKeys[0]}</Link>
            </li>
          );
        });

        return (
          <div
            className="col-sm-1 header-font-size text-center"
            style={{ padding: "0%" }}
            key={index}
          >
           <Link className="dropdown-toggle header-font-color" data-toggle="dropdown" role="button" aria-expanded="false" to={item[keys[0]]} >{keys[0]} <span className="caret" /></Link>
            <li
              className="dropdown open list-style-none header-li-font-padding "
              key={index}
            >
              <ul
                className="dropdown-menu dropdownhover-top header-li-font-padding "
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
          <div
            className="col-sm-1 header-font-size text-center"
            key={index}
            style={{ padding: "0%" }}
          >
            <Link to={item[keys[0]]} className="header-font-color active">
              {keys[0]}
            </Link>
          </div>
        );
      }
      return header;
    });
    return <div className="row">{header}</div>;
  }
}

PostLoginHeader.propTypes = {
  user: PropTypes.object.isRequired,
  userAlreadySignin: PropTypes.func.isRequired
};
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
