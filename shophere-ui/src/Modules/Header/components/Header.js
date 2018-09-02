import React, { Component } from "react";
import { Link,NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from 'js-cookie';

class Header extends Component {
    state = {
        privateContents: [{'Settings':'settings'}, {'User':'user'}, {'Logout':'logout'}],
        publicContents: [{'Products':'products'}, {'SignIn':'signin'}]
    };

    render() {
        let dynamicHeader;
        if (Cookies.get('token')) {
            dynamicHeader =  this.state.privateContents.map((item,index)=>{
                return (
                    <li className="nav-item nav-margin" key={index}>
                        <NavLink className="" style={{ textDecoration: 'none', color:'white' }} to={`/${item[Object.keys(item)[0]]}`} >
                            {Object.keys(item)[0]}
                        </NavLink>
                    </li>
                );
            });
        } else {
            dynamicHeader =  this.state.publicContents.map((item,index)=>{
                return (
                    <li className="nav-item nav-margin" key={index}>
                        <NavLink className="" style={{ textDecoration: 'none', color:'white' }} to={`/${item[Object.keys(item)[0]]}`} >
                            {Object.keys(item)[0]}
                        </NavLink>
                    </li>
                );
            });
        }

        return (
            <div className='row'>
            <div className='col-sm-12'>
                <nav style={{paddingLeft:'2%',paddingRight:'2%'}} className="navbar navbar-expand-sm bg-info navbar-dark">
                    <Link className="navbar-brand shophere-header" to={"/"}>
                        <img className="logo" src={require("../../../Images/logo.png")} />
                    </Link>
                    <ul className="navbar-nav">{dynamicHeader}</ul>
                </nav>
            </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser
    };
};
export default connect(mapStateToProps)(Header);
