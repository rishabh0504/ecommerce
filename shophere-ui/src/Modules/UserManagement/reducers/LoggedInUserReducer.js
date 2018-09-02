import { USER_LOGIN, USER_LOGOUT } from "../actions/UserManagementActions";

const initialState = {
    loggedInUser: {
        username: "",
        email: "",
        mobile: "",
        isLoggedIn: false
    }
};

export default function(state = initialState, action) {
    console.log('action',action);
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loggedInUser: { ...state.loggedInUser, ...action.payload }
            };
    }
    return state;
}
