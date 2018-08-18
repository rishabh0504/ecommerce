import {combineReducers} from 'redux';
import SignUpReducer from './Modules/UserManagement/reducers/SignupReducer';
const CombinedReducers = combineReducers({
	signupUser : SignUpReducer
})

export default CombinedReducers;