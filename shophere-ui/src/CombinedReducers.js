import {combineReducers} from 'redux';
import UserReducer from './Components/UserManagement/reducers/UserReducer';
const CombinedReducers = combineReducers({
	user : UserReducer
})

export default CombinedReducers;