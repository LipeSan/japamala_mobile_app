import axios from 'axios';

export interface Login{
    email:string,
    password:string
}

export interface Register{
    firstName:string,
    lastName:string,
    email:string,
    password:string
}

export interface ForgotPassword{
    email:string
}

const uslBase = 'http://localhost:3000';


export const doLogin = (login:Login) => {
    return axios.post(`${uslBase}/auth/authenticate`, login).then((data) => {
      return data;
    }).catch(error => {
        console.log("ERROR", error.response);
        return error.response; 
    });
}

export const doForgotPassword = (forgotPassword:ForgotPassword) => {
    return axios.post(`${uslBase}/auth/forgot_password`, forgotPassword).then((data) => {
        return data;
    }).catch(error => {
        console.log("ERROR", error.response);
        return error.response; 
    })
}

export const doSignUp = (register:Register) => {
    return axios.post(`${uslBase}/auth/register`, register).then((data) => {
        return data;
    }).catch(error => {
        console.log("ERROR", error.response);
        return error.response; 
    })
}