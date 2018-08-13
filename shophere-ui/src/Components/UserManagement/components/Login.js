import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="row navbar-default">
        <div className="container-fluid">
          <div className="col-sm-4 col-sm-offset-4 ">
            <form action="">
              <div className="form-group">
                <label >Email address:</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label >Password:</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
