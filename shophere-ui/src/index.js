import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Modules/App";
import "./Include/bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./Stylesheets/app.css";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
