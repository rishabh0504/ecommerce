import { combineReducers } from "redux";
import SignUpReducer from "./Modules/UserManagement/reducers/SignupReducer";
import SignInReducer from "./Modules/UserManagement/reducers/SigninReducer";
import LoggedInUserReducer from "./Modules/UserManagement/reducers/LoggedInUserReducer";

const CombinedReducers = combineReducers({
    signupUser: SignUpReducer,
    signinUser: SignInReducer,
    loggedInUser: LoggedInUserReducer
});

export default CombinedReducers;
