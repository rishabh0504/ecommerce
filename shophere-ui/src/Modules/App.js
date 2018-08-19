import React, { Component } from "react";
import Header from "./Header/components/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
