import React from "react";
import ReactDOM from "react-dom";
import {  Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./Modules/App";
import "./Includes/bootstrap";
import "./Stylesheets/app.css";
import store from "./Modules/Common/Store";
import history from './Modules/Common/history';


ReactDOM.render(
  <Provider store={store}>
    
      <App />

  </Provider>,
  document.getElementById("root")
);
