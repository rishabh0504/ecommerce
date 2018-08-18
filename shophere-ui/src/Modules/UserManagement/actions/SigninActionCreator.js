

import {
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_IN_LOADING,
    SIGN_IN_RESET
} from './UserManagementActions';
import {SERVER_URL} from '../../../API_END';

import axios from 'axios';

export const signin = (email,password)=>dispatch =>{
    axios.post(`${SERVER_URL}/user/signin`,{username:email,password})
        .then(res=>{
            console.log(res);
            if(res.status===403){
                dispatch({
                    type:SIGN_IN_ERROR,
                    payload:res.data.message
                });
            }
        })
}


export const resetSigninState = ()=>dispatch =>{
    /*dispatch({
        type:SIGN_UP_RESET
    })*/
}