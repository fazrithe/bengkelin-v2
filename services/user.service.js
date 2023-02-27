import getConfig from "next/config";
import { BehaviorSubject } from "rxjs";


import { fetchWrapper } from '@/helpers/fetch-wrapper';

const { publicRuntimeConfig }= getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value},
    login
}

function login(Email, Password){
    return fetchWrapper.post(`${baseUrl}/auth/login`, { Email, Password })
    .then(user => {
        // publish user to subscribers and store in local storage to stay logged in between page refreshes
        userSubject.next(user);
        if(user.status === "success"){
            
            console.log(user.status);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userLog', JSON.stringify(user.status));
            return user;
        }else{
            return logout();
        }
    })
    .catch((error) => {
        //assign error to state "validation"
        return "error";
    })
}