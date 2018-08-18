

import {
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_IN_LOADING,
    SIGN_IN_RESET
} from './UserManagementActions';
import {SERVER_URL} from '../../../API_END';

import axios from 'axios';

export const signin = (email,password)=>dispatch =>{
    axios.post(`${SERVER_URL}/user/signup`,{username:email,password})
        .then(res=>{
            if(res.status===409){
              /*  dispatch({
                    type:SIGN_UP_ERROR,
                    payload:res.data.message
                });*/
            }else if(res.status===500){
               /* dispatch({
                    type:SIGN_UP_ERROR,
                    payload:res.data.message
                });*/
            }else if(res.status===200){
                /*dispatch({
                    type:SIGN_UP_SUCCESS,
                    payload:res.data.message
                });*/
            }
        })
}


export const resetSigninState = ()=>dispatch =>{
    /*dispatch({
        type:SIGN_UP_RESET
    })*/
}