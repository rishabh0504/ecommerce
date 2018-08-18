import {combineReducers} from 'redux';
import SignUpReducer from './Modules/UserManagement/reducers/SignupReducer';
import SignInReducer from './Modules/UserManagement/reducers/SigninReducer';
const CombinedReducers = combineReducers({
	signupUser : SignUpReducer,
    signinUser : SignInReducer
})

export default CombinedReducers;