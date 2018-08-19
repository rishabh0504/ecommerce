import {
    SIGN_IN_ERROR,
    USER_LOGIN
} from "./UserManagementActions";
import { SERVER_URL } from "../../Common/API_END_POINTS";

import axios from "axios";

export const signin = (email, password) => dispatch => {
    axios
        .post(`${SERVER_URL}/user/signin`, { username: email, password })
        .then(res => {
            if (res.data.status === 403) {
                dispatch({
                    type: SIGN_IN_ERROR,
                    payload: res.data.message
                });
            }
            if (res.data.status === 200) {
                const loggedInUser = res.data.user;
                loggedInUser.token = res.data.token;
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("isLoggedIn", true);
                loggedInUser.isLoggedIn = true;
                dispatch({
                    type: USER_LOGIN,
                    payload: loggedInUser
                });
            }
        });
};

export const resetSigninState = () => dispatch => {
    /*dispatch({
          type:SIGN_UP_RESET
      })*/
};
