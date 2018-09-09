import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { signin, userAlreadySignin } from "../actions/SigninActionCreator";
import Validator from "validator";
import Cookies from "js-cookie";
import history from "../../Common/history";
class Signin extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {},
    loggedIn : false
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
    if (!data.password) errors.passwordError = "Enter password";
    return errors;
  };

  signIn = () => {
    const errors = this.validateInputs(this.state.data);
    if (Object.keys(errors).length === 0) {
      this.props.signin(this.state.data.email, this.state.data.password);
    } else {
      this.setState({ errors }, () => {});
    }
  };

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
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const { data, errors } = this.state;
    let error;
    let success;
    let style = {};

    if (this.props.signinUser.signinUser.errorMessage !== "") {
      error = this.props.signinUser.signinUser.errorMessage;
    }
    if (this.props.signinUser.signinUser.successMessage !== "") {
      error = this.props.signinUser.signinUser.successMessage;
      style.display = "none";
    }
    return (
      <div className="row form-bg">
        <div className="col-sm-4" />
        <div className="col-sm-4 media border p-3 media-signin">
          <div className="media-body media-form-body">
            <p className="text-center form-color header-font-size">
              <strong>Sign In</strong>
            </p>
            <p className="form-color text-center">
              <strong>{error}</strong>
            </p>
            <p className="form-color text-center">
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
                  value={data.email}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Type email..."
                />
                <p className="text-danger">{errors.emailError}</p>
              </div>

              <div className="form-group" style={style}>
                <label className="form-color header-font-size">
                  <strong>Password:</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  className="form-control form-control-sm"
                  onChange={this.inputHandler}
                  placeholder="Type Password..."
                />
                <p className="text-danger">{errors.passwordError}</p>
              </div>

              <div className="form-group div-text-center">
                <label className="form-color header-font-size">
                  <strong>
                    Still don't have an account. Click{" "}
                    <Link to={"/signup"}> here </Link> to Signup.
                  </strong>
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.signIn}
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

Signin.propTypes = {
  signinUser: PropTypes.object.isRequired,
  signin: PropTypes.func.isRequired,
  userAlreadySignin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    signinUser: state.signinUser,
    loggedInUser: state.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signin, userAlreadySignin }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
