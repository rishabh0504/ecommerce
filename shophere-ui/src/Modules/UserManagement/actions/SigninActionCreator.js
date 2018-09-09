import axios from 'axios';
import Cookies from 'js-cookie';

import {
    SIGN_IN_ERROR,
    USER_LOGIN,
    SIGN_IN_SUCCESS
} from "./UserManagementActions";

import { SERVER_URL } from "../../Common/API_END_POINTS";


export const signin = (email, password) => dispatch => {
    axios
        .post(`/user/signin`, { username: email, password })
        .then(res => {
            if (res.data.status === 403) {
                dispatch({
                    type: SIGN_IN_ERROR,
                    payload: res.data.message
                });
            }
            if (res.data.status === 200) {
                console.log(res.data);
                const {user : loggedInUser,token,contents} = res.data;
                Object.keys(token).map(key=>{
                    Cookies.set(key,token[key]);    
                })
                sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
                sessionStorage.setItem("contents", JSON.stringify(contents));
                dispatch({
                    type: USER_LOGIN,
                    payload: loggedInUser
                });
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: true
                });
            }
        });
};

export const userAlreadySignin = () => dispatch => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    dispatch({
        type: USER_LOGIN,
        payload: loggedInUser
    })
};

export const resetSigninState = () => dispatch => {
    /*dispatch({
          type:SIGN_UP_RESET
      })*/
};


