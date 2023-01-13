
import { Navigate, useRoutes } from "react-router-dom"
import { Footer, Home } from "../APP/COMPONENTS"
import { Login } from "../Authentication/Login"
import { PrivateRoute } from "../ROUTER/PrivateRoute"
import { PublicRoute } from "../ROUTER/PublicRoute"
import { SecundaryRoute } from "./SecundaryRoute"

const routes = [
    {
        path: "/",
        element : <Navigate to = "/login" /> 
    }, 
    
    {
        path: "/login",
        element : <PublicRoute>
            <Login />
        </PublicRoute>
    },

    {
        path: "/*",
        element : <PrivateRoute>
            <SecundaryRoute />
        </PrivateRoute>
    }


     
]

export const PrincipalRoute=()=>{

    const element = useRoutes(routes)
    
    
    return <>
    {element}


    </>
}