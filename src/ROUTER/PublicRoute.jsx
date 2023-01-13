import { Navigate } from "react-router-dom";

export const PublicRoute=({children})=>{

    const dataUser = localStorage.getItem("dataUser");

    console.log("Pblic found")
    console.log(dataUser)

    return (
        dataUser
        ? <Navigate to = "/home" />
        : children
    )
}