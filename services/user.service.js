import getConfig from "next/config";
import { BehaviorSubject } from "rxjs";


import { fetchWrapper } from '@/helpers/fetch-wrapper';

const { publicRuntimeConfig }= getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value},
    login,
    register
}

function login(Email, Password){
    return fetchWrapper.post(`${baseUrl}/auth/login`, { Email, Password })
    .then(response => {
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        userSubject.next(response.data);
        if(response.status === "success"){
            
            console.log(response.status);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('userLog', JSON.stringify(response.status));
            return response.status;
        }else{
            return logout();
        }
    })
    .catch((error) => {
        //assign error to state "validation"
        // return "error";
        return error;
    })
}

function register(user){
    return fetchWrapper.post(`${baseUrl}/register`, user)
    .then(response => {
        return response.status;
    })
    .catch((error) => {
        //assign error to state "validation"
        // return "error";
        return error;
    })
}

