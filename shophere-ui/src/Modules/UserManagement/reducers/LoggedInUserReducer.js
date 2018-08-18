import { USER_LOGIN, USER_LOGOUT } from "../actions/UserManagementActions";

const initialState = {
    loggedInUser: {
        username: "rishabh",
        email: "rishabh.tiwari0504@gmail.com",
        mobile: "9834311785",
        token: "",
        isLoggedIn: false
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, ...action.payload }
            };
    }
    return state;
}
