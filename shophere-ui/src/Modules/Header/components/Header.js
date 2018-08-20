import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends Component {
    state = {
        privateContents: ["Settings", "User", "Logout"],
        publicContents: ["Products", "SignIn"]
    };

    render() {
        console.log(this.props.loggedInUser);
        let dynamicComponents;
        if (this.props.loggedInUser.loggedInUser.isLoggedIn) {
            dynamicComponents = this.state.privateContents.map(
                (privateContent, index) => {
                    return (
                        <li className="nav-item nav-padding" key={index}>
                            <Link className="custom-navbar nav-padding" to={"/signin"}>
                                {privateContent}
                            </Link>
                        </li>
                    );
                }
            );
        } else {
            dynamicComponents = this.state.publicContents.map(
                (publicContent, index) => {
                    return (
                        <li className="nav-item nav-padding" key={index}>
                            <Link className="custom-navbar nav-padding"  to={"/signin"}>
                                {publicContent}
                            </Link>
                        </li>
                    );
                }
            );
        }

        return (
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <Link className="navbar-brand shophere-header" to={"/"}>
                    <img className="logo" src={require("../../../Images/logo.png")} />
                </Link>
                <ul className="navbar-nav">{dynamicComponents}</ul>
            </nav>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    };
};
export default connect(mapStateToProps)(Header);
