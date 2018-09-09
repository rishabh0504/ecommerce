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

class Body extends Component {
  state = {
    privateContent: [],
    publicContent: [
      { products: "Products", type: "link" },
      {
        categories: "Categories",
        type: "category",
        elements: [
          { "Men's Fashion": "mens" },
          { "Women's Fashion": "womens" },
          { "Baby's Fashion": "childrens" }
        ]
      },

      { home: "Home", type: "link" },
      { contactus: "Contact Us", type: "link" },
      { aboutUs: "About Us", type: "link" }
     
    ],
    optional: { signin: "Sign In", type: "link" },
    user: {}
  };


  componentDidMount() {
    if(Cookies.get("token")){
      const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
      if (
        loggedInUser &&
        Object.keys(loggedInUser).length > 0)
      {
        this.props.userAlreadySignin();
        this.setState({ privateContent: this.props.contents.privateContent,optional:{signout :'Sign Out'}});
      }
    }
  }
  componentWillReceiveProps(newProps) {
   // this.checkIfUserAlreadyLoggedIn();
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
            </Link>
            <div id={keys[0]} className="collapse">
              {finalElement}
            </div>
          </div>
        );
      }
    });

    let privateContent;
    if (Cookies.get("token")) {
      privateContent = this.state.privateContent.map((eachCategory, index) => {
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
              </Link>
              <div id={keys[0]} className="collapse">
                {finalElement}
              </div>
            </div>
          );
        }
      });
    }
    const keys = Object.keys(this.state.optional);
    let authContent = (
      <div>
        <Link
          className="list-group-item list-group-item-action list-group-item-info sidbar-font-size"
          to={keys[0]}
          type="button"
        >
          {this.state.optional[keys[0]]}
        </Link>
      </div>
    );
    return (
      <div className="row body">
        <div className="col-2">
          <div className="list-group list-group-flush">
            {publicContent}
            {authContent}
            {privateContent}
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
