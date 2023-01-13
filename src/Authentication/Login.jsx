import { useContext, useState } from "react"
import { loginContext } from "../CONTEXT/LoginProvider"
import { FormRegister } from "./FormRegiser"
import { FormSigIn } from "./FormSigIn"

export const Login=()=>{

    const dataLogin = useContext(loginContext);

    const [changeForm, setChangeForm] = useState(true);


    if(changeForm) return  <FormRegister changeForm = {setChangeForm} />

    else if(!changeForm) return <FormSigIn changeForm = {setChangeForm} />

    
}