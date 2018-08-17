

import {
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR
 } from './UserManagementActions';

import axios from 'axios';

 export const signup = (email,password,mobile)=>dispatch =>{
 	axios.post('http://localhost:3001/user/signup',{email,password,mobile,username:email})
	.then(res=>{
		if(res.status===409){
			dispatch({
				type:SIGN_UP_ERROR,
				payload:res.data.message
			});
		}else if(res.status===500){
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