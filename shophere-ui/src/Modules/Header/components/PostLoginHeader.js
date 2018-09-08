import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";


//import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
//library.add(faCog, faUser);

class PostLoginHeader extends Component{
    render(){
        return(
            <h4>This is post login</h4>
        )
    }
}



export default PostLoginHeader;