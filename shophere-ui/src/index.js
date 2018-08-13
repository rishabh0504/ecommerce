import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import './include/bootstrap';
import { BrowserRouter as Router} from "react-router-dom";
import './Stylesheets/app.css';


ReactDOM.render(
	<Router>
      <App />
    </Router>, document.getElementById('root'));

