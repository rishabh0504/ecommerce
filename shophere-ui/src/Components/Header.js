import React, { Component } from "react";
import {  Link } from "react-router-dom";



export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <a className="navbar-brand shophere-header">
          <img className="logo" src={require("../Images/logo.png")} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="custom-navbar" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
