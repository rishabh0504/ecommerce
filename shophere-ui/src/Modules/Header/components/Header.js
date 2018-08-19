import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    state = {};

    render() {
        console.log(this.state);
        return (
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <Link className="navbar-brand shophere-header" to={"/"}>
                    <img className="logo" src={require("../../../Images/logo.png")} />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="custom-navbar" to={"/signin"}>
                            Signin
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
