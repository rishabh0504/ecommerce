import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./Modules/App";
import "./Includes/bootstrap";
import "./Stylesheets/app.css";
import store from "./Modules/Common/Store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
