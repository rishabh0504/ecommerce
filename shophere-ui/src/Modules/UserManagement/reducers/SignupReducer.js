import { SIGN_UP_ERROR,SIGN_UP_SUCCESS,SIGN_UP_RESET } from "../actions/UserManagementActions";

const initialState = {
  signupUser: {
    errorMessage: "",
    successMessage: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return {
        ...state,
        signupUser :{...state.signupUser,errorMessage:action.payload}
      };
      case SIGN_UP_SUCCESS:
      return {
        ...state,
        
         signupUser :{...state.signupUser,successMessage:action.payload}

      };
      case SIGN_UP_RESET:
      return {
        ...state,
         signupUser :{...state.signupUser,...initialState.signupUser}
      };
  }
  return state;
}
