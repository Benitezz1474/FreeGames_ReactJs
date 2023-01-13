import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { loginContext } from "../CONTEXT/LoginProvider"

export const PrivateRoute=({children})=>{
    
    const dataUser = localStorage.getItem("dataUser");

    console.log(dataUser)

    return (
        dataUser
        ? children
        : <Navigate to = "/login" />
    )
}