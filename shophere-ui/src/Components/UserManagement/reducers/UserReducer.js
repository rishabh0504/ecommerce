import { SIGN_UP_ERROR,SIGN_UP_SUCCESS } from "../actions/UserManagementActions";

const initialState = {
  user: {
    email: "",
    mobile: "",
    password: "",
    username: "",
    isUserLoggedIn: false,
    token: "",
    errorMessage: "",
    successMessage: ""

  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return {
        ...state,
        user :{...state.user,errorMessage:action.payload}
      };
      case SIGN_UP_SUCCESS:
      return {
        ...state,
        
         user :{...state.user,successMessage:action.payload}

      };
  }
  return initialState;
}
