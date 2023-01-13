import { useReducer } from "react"
import { reducer } from "./reducerLogin";

export const useReducerLogin=()=>{
    
    const initialState = {
        user: "",
        password: "",
        password2:"",
        email : ""
    }

    const [state, dispatch] = useReducer(reducer,initialState);

    const onLogin=(newUser)=>{
    
        const action = {
            type: "Login",
            payload: newUser
        }

        console.log(newUser)

        localStorage.setItem("dataUser",JSON.stringify(newUser))

        dispatch(action);
        

    }

    return {
        onLogin,
        state
    }


}