import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
/*import {
    register,
    resetSignupState
} from "../actions/SignupActionCreator";*/

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: "",
            passwordError: "",
            email: "",
            password: ""
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

    };

    validateInputs = () => {

    };

    signin = () => {

    };

    componentDidMount() {

    }

    render() {
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
            <div className="row navbar-default form-bg">
                <div className="col-sm-4" />
                <div className="col-sm-4 media border p-3 media-signup">
                    <div className="media-body media-form-body">
                        <h4 className="text-center form-color">Sign In</h4>
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

                            <div className="form-group div-text-center">
                                <label className="form-color ">
                                    <strong>
                                        Still don't have an account. Click <Link to={"/signup"}> here </Link> to
                                        Signup.
                                    </strong>
                                </label>
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={this.signin}
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
    signinUser: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        signinUser: state.signinUser
    };
};

/*const mapDispatchToProps = dispatch => {
    return bindActionCreators({ register, resetSignupState }, dispatch);
};*/

export default connect(
    mapStateToProps,
    null
)(Signin);
