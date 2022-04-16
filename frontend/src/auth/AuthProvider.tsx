import {ReactNode, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "./AuthContext";
import {loginUser} from "../service/apiService";

export default function AuthProvider({children}:{children :ReactNode}) {

    const [token , setToken] = useState(localStorage.getItem('jwt')||'')
    const nav = useNavigate()

    useEffect(()=>{
        if (!token){
            nav("/login")
        }
    }, [token, nav])

    const login = (username: string, password : string) => {
        return loginUser(username, password)
            .then(data => {
                setToken(data.token)
                localStorage.setItem('jwt',data.token)
            })
    }

    const logout = () => {
        setToken('')
        localStorage.removeItem('jwt')
    }

    return <AuthContext.Provider value={{token, login, logout}} >{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext)