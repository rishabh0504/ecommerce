import { SIGN_IN_ERROR,SIGN_IN_SUCCESS,SIGN_IN_RESET } from "../actions/UserManagementActions";

const initialState = {
    signinUser: {
        errorMessage: "",
        successMessage: ""
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_ERROR:
            return {
                ...state,
                signinUser :{...state.signinUser,errorMessage:action.payload}
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loggedInUser :{...state.loggedInUser,loggedInUser:action.payload}
            };
        case SIGN_IN_RESET:
            return {
                ...state,
                signinUser :{...state.signinUser,...initialState.signinUser}
            };
    }
    return state;
}
