import React, { Component } from "react";
import Header from "./Header/components/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <div>
            <Header />
            <Body />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
