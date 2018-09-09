import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Validator from "validator";
import Cookies from "js-cookie";
import {
  register,
  resetSignupState,
  userAlreadySignin
} from "../actions/SignupActionCreator";
import history from "../../Common/history";
class Signup extends Component {
  state = {
    data: {
      email: "",
      password: "",
      confirmPassword: "",
      mobile: ""
    },
    errors: {},
    loading: false
  };

  inputHandler = event => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  };

  validateInputs = data => {
    const errors = {};
    if (!Validator.isEmail(data.email))
      errors.emailError = "Please enter valid email id";
    if (/^\d+$/.test(data.mobile) === false)
      errors.mobileError = "Invalid mobile no.";
    if (!data.password) errors.passwordError = "Enter password";
    if (!data.confirmPassword) errors.confirmPasswordError = "Enter password";
    if (data.password && data.password !== data.confirmPassword)
      errors.confirmPasswordError = "Password did not match.";
    return errors;
  };

  signUp = () => {
    const errors = this.validateInputs(this.state.data);
    if (Object.keys(errors).length === 0) {
      this.props.register(
        this.state.data.email,
        this.state.data.password,
        this.state.data.mobile
      );
    } else {
      this.setState({ errors }, () => {});
    }
  };

  componentDidMount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.isLoggedIn && loggedInUser.token) {
      this.props.userAlreadySignin();
    }
    if (
      this.props.signupUser.signupUser.successMessage !== "" &&
      this.props.signupUser.signupUser.successMessage !== ""
    ) {
      this.props.resetSignupState();
    }

    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      history.push("/products");
    }
  }

  componentDidMount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      this.props.history.push("/products");
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps && Cookies.get("token") ) {
      console.log('reciived props',newProps.signinUser);
      this.props.history.push("/products");
    }
  }


  render() {
    const { data, errors } = this.state;
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
            <p className="text-center form-color header-font-size">
              <strong>Sign Up</strong>
            </p>
            <p className="form-color text-center header-font-size">
              <strong>{error}</strong>
            </p>
            <p className="form-color text-center header-font-size">
              <strong>{success}</strong>
            </p>
            <form action="">
              <div className="form-group" style={style}>
                <label className="form-color header-font-size">
                  <strong>Email: </strong>
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.data.email}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Type email..."
                />
                <p className="text-danger header-font-size">
                  {errors.emailError}
                </p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color header-font-size">
                  <strong>Mobile no:</strong>
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={this.state.data.mobile}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Type Mobile no..."
                />
                <p className="text-danger">{errors.mobileError}</p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color header-font-size">
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.data.password}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Type Password..."
                />
                <p className="text-danger header-font-size">
                  {errors.passwordError}
                </p>
              </div>
              <div className="form-group" style={style}>
                <label className="form-color header-font-size">
                  <strong>Confirm Password:</strong>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.data.confirmPassword}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Confirm Passwrod..."
                />
                <p className="text-danger header-font-size">
                  {errors.confirmPasswordError}
                </p>
              </div>
              <div className="form-group div-text-center">
                <label className="form-color header-font-size ">
                  <strong>
                    Already have account. Click{" "}
                    <Link to={"/signin"}> here </Link> to login.
                  </strong>
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.signUp}
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
  register: PropTypes.func.isRequired,
  userAlreadySignin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    signupUser: state.signupUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { register, resetSignupState, userAlreadySignin },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
