import { createContext } from "react";
import { useReducerLogin } from "./useReducerLogin";

export const loginContext = createContext();

export const LoginProvider=({children})=>{

    const {state,onLogin} = useReducerLogin()

    const data = {
        state,
        onLogin
    }

    return <loginContext.Provider value={data}>
            {children}
         </loginContext.Provider>
}