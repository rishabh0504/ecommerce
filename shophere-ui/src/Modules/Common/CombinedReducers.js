import { combineReducers } from "redux";
import SignUpReducer from "../UserManagement/reducers/SignupReducer";
import SignInReducer from "../UserManagement/reducers/SigninReducer";
import LoggedInUserReducer from "../UserManagement/reducers/LoggedInUserReducer";

const CombinedReducers = combineReducers({
    signupUser: SignUpReducer,
    signinUser: SignInReducer,
    loggedInUser: LoggedInUserReducer
});

export default CombinedReducers;
