import {
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,
	SIGN_UP_LOADING,
	SIGN_UP_RESET
 } from './UserManagementActions';
import {SERVER_URL} from '../../Common/API_END_POINTS';

import axios from 'axios';

 export const register = (email,password,mobile)=>dispatch =>{
 	axios.post(`${SERVER_URL}/user/signup`,{email,password,mobile,username:email})
	.then(res=>{
		console.log(res);
		if(res.status===400){
			dispatch({
				type:SIGN_UP_ERROR,
				payload:res.data.message
			});
		}else if(res.status===400){
			dispatch({
				type:SIGN_UP_ERROR,
				payload:res.data.message
			});
		}else if(res.status===200){
			dispatch({
				type:SIGN_UP_SUCCESS,
				payload:res.data.message
			});
		}
	})
 }


 export const resetSignupState = ()=>dispatch =>{
 	dispatch({
 		type:SIGN_UP_RESET
 	})
 }