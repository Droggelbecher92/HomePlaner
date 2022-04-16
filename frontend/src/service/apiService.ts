import axios from "axios";


//USER
export const loginUser = (username:string, password: string) => {
    return axios.post(`/auth`, {'username': username, 'password': password})
        .then(response => response.data)
}

export const registerNewUser = (username: string,password:string,passwordAgain:string) => {
    return axios.post(`/api/user`,
        {username, password, passwordAgain})
        .then(response => response.data)
}