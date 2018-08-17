import {combineReducers} from 'redux';
import SignUpReducer from './Components/UserManagement/reducers/SignupReducer';
const CombinedReducers = combineReducers({
	signupUser : SignUpReducer
})

export default CombinedReducers;