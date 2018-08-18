import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import {
    signin
} from "../actions/SigninActionCreator";
import Validator from "validator";

class Signin extends Component {

        state = {
            data : {
                email: "",
                password: ""
            },
            loading : false,
            errors : {}
        };


    inputHandler = event => {
        this.setState({data : { ...this.state.data,[event.target.name]: event.target.value }});
    };



    validateInputs = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.emailError='Please enter valid email id';
        if(!data.password )  errors.passwordError= "Enter password";
        return errors;
    };

    signIn = () => {
        const errors = this.validateInputs(this.state.data);
        if(Object.keys(errors).length===0){
            this.props.signin(
                this.state.data.email,
                this.state.data.password
            );
        }else{
            this.setState({errors},()=>{
            });
        }
    };

    componentDidMount() {

    }

    render() {
        const {data,errors} = this.state;
        let error;
        let success;
        let style = {};
        console.log(this.props.signinUser);
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
                                    value={data.email}
                                    className="form-control"
                                    onChange={this.inputHandler}
                                    placeholder="Type email..."
                                />
                                <p className="text-danger">{errors.emailError}</p>
                            </div>

                            <div className="form-group" style={style}>
                                <label className="form-color">
                                    <strong>Password:</strong>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control"
                                    onChange={this.inputHandler}
                                    placeholder="Type Password..."
                                />
                                <p className="text-danger">{errors.passwordError}</p>
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
    signin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        signinUser: state.signinUser
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signin }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
