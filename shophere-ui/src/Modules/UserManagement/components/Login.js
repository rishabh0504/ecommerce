import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="row navbar-default form-bg">
        <div className="col-sm-4" />
        <div className="col-sm-4 media border p-3 media-signin">

          <div className="media-body">
            <br/><br/><br/>
            <h4 className="text-center text-info">Sign In</h4>
            <form action="">
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" />
              </div>
              
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" />
              </div>
              
              <div className="form-group">
                <label>
                  Still don't have acoount. Click here to <Link to={"/Signup"}>signup</Link>.
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-4" />
      </div>
    );
  }
}


export default  Login;