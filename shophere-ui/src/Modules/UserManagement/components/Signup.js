import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {
  register,
  resetSignupState
} from "../actions/SignupActionCreator";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: "",
      passwordError: "",
      mobileNoError: "",
      confirmPasswordError: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateEmail = email => {
    let regexForEmail = /\S+@\S+\.\S+/;
    regexForEmail.test(email) === false
      ? this.setState({ emailError: "Invalid Email id." })
      : this.setState({ emailError: "" });
  };

  validatePassword = () => {
    this.state.password === ""
      ? this.setState({ passwordError: "Invalid password." })
      : this.setState({ passwordError: "" });
    this.state.confirmPassword === ""
      ? this.setState({ confirmPasswordError: "Invalid password." })
      : this.setState({ confirmPasswordError: "" });
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPasswordError: "Password did not match." });
    }
  };
  validateMobileNo = mobileNo => {
    let regexFormobileNo = /^\d+$/;
    regexFormobileNo.test(mobileNo) === false
      ? this.setState({ mobileNoError: "Invalid mobile no." })
      : this.setState({ mobileNoError: "" });
  };
  validateInputs = () => {
    this.validateEmail(this.state.email);
    this.validatePassword();
    this.validateMobileNo(this.state.mobileNo);
  };

  signup = () => {
    this.validateInputs();
    if (
      this.state.emailError === "" &&
      this.state.passwordError === "" &&
      this.state.confirmPasswordError === "" &&
      this.state.mobileNoError === ""
    ) {
      this.props.register(
        this.state.email,
        this.state.password,
        this.state.mobileNo
      );
    }
  };

  componentDidMount() {
    if (
      this.props.signupUser.signupUser.successMessage !== "" &&
      this.props.signupUser.signupUser.successMessage !== ""
    ) {
      this.props.resetSignupState();
    }
  }

  render() {
    let error;
    let success;
    let style = {};
    if (this.props.signupUser.signupUser.errorMessage !== "") {
      error = this.props.signupUser.signupUser.errorMessage;
    }
    if (this.props.signupUser.signupUser.successMessage !== "") {
      error = this.props.signupUser.signupUser.successMessage;
      style.display = "none";
    }
    return (
      <div className="row navbar-default form-bg">
        <div className="col-sm-4" />
        <div className="col-sm-4 media border p-3 media-signup">
          <div className="media-body media-form-body">
            <h4 className="text-center form-color">Sign Up</h4>
            <h5 className="form-color text-center">
              <strong>{error}</strong>
            </h5>
            <h5 className="form-color text-center">
              <strong>{success}</strong>
            </h5>
            <form action="">
              <div className="form-group" style={style}>
                <label className="form-color">
                  <strong>Email: </strong>
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  onChange={this.inputHandler}
                  placeholder="Type email..."
                />
                <p className="text-danger">{this.state.emailError}</p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color">
                  <strong>Mobile no:</strong>
                </label>
                <input
                  type="text"
                  name="mobileNo"
                  value={this.state.mobileNo}
                  className="form-control"
                  onChange={this.inputHandler}
                  placeholder="Type Mobile no..."
                />
                <p className="text-danger">{this.state.mobileNoError}</p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color">
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  onChange={this.inputHandler}
                  placeholder="Type Password..."
                />
                <p className="text-danger">{this.state.passwordError}</p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color">
                  <strong>Confirm Password:</strong>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  className="form-control"
                  onChange={this.inputHandler}
                  placeholder="Confirm Passwrod..."
                />
                <p className="text-danger">{this.state.confirmPasswordError}</p>
              </div>
              <div className="form-group div-text-center">
                <label className="form-color ">
                  <strong>
                    Already have account. Click <Link to={"/"}> here </Link> to
                    login.
                  </strong>
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.signup}
                style={style}
              >
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

Signup.propTypes = {
  signupUser: PropTypes.object.isRequired,
  resetSignupState: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    signupUser: state.signupUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ register, resetSignupState }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
