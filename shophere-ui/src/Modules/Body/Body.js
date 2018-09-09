import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink, Switch, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import Signin from "../UserManagement/components/Signin.js";
import Signup from "../UserManagement/components/Signup.js";
import Products from "../Product/components/Products";
import ContactUs from "./ContactUS";
import history from "../Common/history";
import { userAlreadySignin } from "../UserManagement/actions/SigninActionCreator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faShoppingCart,
  faCaretDown,
  faPhone,
  faHome,
  faSignInAlt,
  faUserShield,
  faMale,
  faFemale,
  faChild,
  faShoppingBag,
  faListUl,
  faCogs,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faStroopwafel,
  faShoppingCart,
  faCaretDown,
  faPhone,
  faHome,
  faSignInAlt,
  faUserShield,
  faMale,
  faFemale,
  faChild,
  faShoppingBag,
  faListUl,
  faCogs,
  faSignOutAlt
);

class Body extends Component {
  state = {
    privateContent: [],
    publicContent: [
      { products: "Products", type: "link", icon: "shopping-cart" },
      {
        categories: "Categories",
        type: "category",
        elements: [
          { "Men's Fashion": "mens", icon: "male" },
          { "Women's Fashion": "womens", icon: "female" },
          { "Kids's Fashion": "kids", icon: "child" }
        ],
        icon: "caret-down"
      },
      { contactus: "Contact Us", type: "link", icon: "phone" },
      { aboutUs: "About Us", type: "link", icon: "home" }
    ],
    optional: { signin: "Sign In", type: "link", icon: "sign-in-alt" },
    user: {}
  };

  componentDidMount() {
    if (Cookies.get("token")) {
      const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
      if (loggedInUser && Object.keys(loggedInUser).length > 0) {
        this.props.userAlreadySignin();
        let user = {};
        user.You = loggedInUser.username.split("@")[0];
        (user.type = "category"),
          (user.elements = [
            { "My Orders": "orders", icon: "shopping-bag" },
            { "My Wishlist": "wishlist", icon: "list-ul" },
            { Settings: "setting", icon: "cogs" }
          ]);
        const privateContent = this.state.privateContent;
        privateContent.push(user);

        this.setState({
          privateContent: privateContent,
          optional: { signout: "Sign Out", icon: "sign-out-alt" },
          user
        });
      }
    }
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps.user);
    /* if(this.props !==newProps){
    if(Cookies.get("token")){
      const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
      const privateContent = JSON.parse(sessionStorage.getItem("contents"));
      if (
        loggedInUser &&
        Object.keys(loggedInUser).length > 0)
      {
        this.props.userAlreadySignin();
        let user = {};
        user.You = loggedInUser.username.split("@")[0];
        user.type = "category",
        user.elements = [
            { 'Settings': "setting" },
            { 'Logout': "logout" },
            { "My Orders": "orders" },
            { "My Wishlist": "wishlist" },
            { "Sign Out": "logout" }
        ];
        privateContent.push(user);
        this.setState({ privateContent: privateContent,optional:{signout :'Sign Out'},user});
      }
    }
   }*/
  }

  render() {
    let publicContent = this.state.publicContent.map((eachCategory, index) => {
      if (eachCategory.type === "link") {
        const keys = Object.keys(eachCategory);
        return (
          <div key={index}>
            <Link
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
              to={keys[0]}
              key={index}
              type="button"
            >
              {eachCategory[keys[0]]}
              <span style={{ fontSize: "150%", float: "right" }}>
                <FontAwesomeIcon icon={eachCategory.icon} />
              </span>
            </Link>
          </div>
        );
      } else if (eachCategory.type === "category") {
        const keys = Object.keys(eachCategory);
        const elements = eachCategory.elements.map((category, index) => {
          const keys = Object.keys(category);
          return (
            <li
              className="sidbar-font-size list-style-none list-group-item sub-menu-color"
              key={index}
            >
              <Link to={category[keys[0]]} className="list-sub-menu">
                {keys[0]}
                <span style={{ fontSize: "150%", float: "right" }}>
                  <FontAwesomeIcon icon={category.icon} />
                </span>
              </Link>
            </li>
          );
        });
        const finalElement = <ul className="list-group">{elements}</ul>;
        return (
          <div key={index} style={{ height: "100%" }}>
            <Link
              className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
              to={keys[0]}
              data-toggle="collapse"
              data-target={`#${keys[0]}`}
              type="button"
            >
              {eachCategory[keys[0]]}
              <span style={{ fontSize: "150%", float: "right" }}>
                <FontAwesomeIcon icon={eachCategory.icon} />
              </span>
            </Link>
            <div id={keys[0]} className="collapse">
              {finalElement}
            </div>
          </div>
        );
      }
    });

    let privateContent = this.state.privateContent.map(
      (eachCategory, index) => {
        if (eachCategory.type === "link") {
          const keys = Object.keys(eachCategory);
          return (
            <div key={index}>
              <Link
                className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
                to={keys[0]}
                key={index}
                type="button"
              >
                {eachCategory[keys[0]]}
                <span style={{ fontSize: "150%", float: "right" }}>
                  <FontAwesomeIcon icon={eachCategory.icon} />
                </span>
              </Link>
            </div>
          );
        } else if (eachCategory.type === "category") {
          const keys = Object.keys(eachCategory);
          const elements = eachCategory.elements.map((category, index) => {
            const keys = Object.keys(category);
            return (
              <li
                className="sidbar-font-size list-style-none list-group-item sub-menu-color"
                key={index}
              >
                <Link to={category[keys[0]]} className="list-sub-menu">
                  {keys[0]}
                  <span style={{ fontSize: "150%", float: "right" }}>
                    <FontAwesomeIcon icon={category.icon} />
                  </span>
                </Link>
              </li>
            );
          });
          const finalElement = <ul className="list-group">{elements}</ul>;
          return (
            <div key={index} style={{ height: "100%" }}>
              <Link
                className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
                to={keys[0]}
                data-toggle="collapse"
                data-target={`#${keys[0]}`}
                type="button"
              >
                {eachCategory[keys[0]]}
                <span style={{ fontSize: "150%", float: "right" }}>
                  <FontAwesomeIcon icon="user-shield" />
                </span>
              </Link>
              <div id={keys[0]} className="collapse">
                {finalElement}
              </div>
            </div>
          );
        }
      }
    );

    const keys = Object.keys(this.state.optional);
    let authContent = (
      <div>
        <Link
          className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
          to={keys[0]}
          type="button"
        >
          {this.state.optional[keys[0]]}
          <span style={{ fontSize: "150%", float: "right" }}>
            <FontAwesomeIcon icon={this.state.optional.icon} />
          </span>
        </Link>
      </div>
    );
    //let userSpecificContent;
    return (
      <div className="row body">
        <div className="col-2">
          <div className="list-group list-group-flush">
            {publicContent}
            {privateContent}

            {authContent}
          </div>
        </div>
        <div className="col-10">
          <div>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/ContactUs" component={ContactUs} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  user: PropTypes.object.isRequired,
  userAlreadySignin: PropTypes.func.isRequired,
  contents: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    user: state.loggedInUser,
    contents: state.contentReducer
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userAlreadySignin }, dispatch);
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Body)
);
