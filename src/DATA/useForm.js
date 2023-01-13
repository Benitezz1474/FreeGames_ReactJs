import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginContext } from "../CONTEXT/LoginProvider";

export const useForm=()=>{

    const navigate = useNavigate();  

    const [userVlidation, setUserValidation] = useState(false);
    const [passwordVlidation, setPasswordValidation] = useState(false);
    const [emailVlidation, setEmailValidation] = useState(false);

    const dataLogin = useContext(loginContext);


    const [inputValue, setInputValue] = useState({
        user : "",
        password : "",
        password2 : "",
        email : ""

    })


    const handleForm=(e)=>{

        
        e.preventDefault();
        
        if(userVlidation == true && passwordVlidation == true && emailVlidation == true){

            const {onLogin} = dataLogin;

            onLogin(inputValue);

            navigate("/home",{replace:true});
        }

        
    }


    //validations : 

    //Validate UserName

    const validateUser=()=>{

        const regExp = /^[a-zA-Z]/;

        if(inputValue.user.length <= 3) return

        if(regExp.test(inputValue.user)){
            setUserValidation(true);
            console.log("user: true");
            return
        };

    }

    
    //Validate Password

    const validatePassword =()=>{

        const regExp = /^[a-zA-Z]/;

        if(inputValue.password.length <= 3) return;

        else if(inputValue.password != inputValue.password2) return

        else if(regExp.test(inputValue.password)) {
            setPasswordValidation(true)
            console.log("password: true")
        }

    
    }

    //Vlidate Email

    const validateEmail=()=>{

        const regExp = /^[a-zA-Z]/;


        if(inputValue.email.length <= 3) return;

        else if(regExp.test(inputValue.email)) {
            setEmailValidation(true)
            console.log("email: true");
            return
        }
    }


    const handleInputChange=(e)=>{
        
        validateUser();
        validatePassword();
        validateEmail();

        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
        
    }


    return {
        inputValue,
        handleForm,
        handleInputChange,
    }

}