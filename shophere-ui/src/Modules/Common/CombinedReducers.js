import { combineReducers } from "redux";
import SignUpReducer from "../UserManagement/reducers/SignupReducer";
import SignInReducer from "../UserManagement/reducers/SigninReducer";
import LoggedInUserReducer from "../UserManagement/reducers/LoggedInUserReducer";
import ContentReducer  from '../Body/BodyReducer';

const CombinedReducers = combineReducers({
    signupUser: SignUpReducer,
    signinUser: SignInReducer,
    loggedInUser: LoggedInUserReducer,
    contentReducer : ContentReducer

});

export default CombinedReducers;
