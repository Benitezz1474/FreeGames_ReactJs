import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearchForm=()=>{

    const [inputValue, setInputValue] = useState();

    const [searchParams, setSearchParams] = useSearchParams();

    const q_params = searchParams.get("q");  

    
    const navigate = useNavigate();


    const handleForm=(e)=>{

        e.preventDefault();

        if(inputValue.length <= 3) return


        navigate(`?q=${inputValue}`)
        
        
        
    }

    const handleInputChange = (e) =>{

        setInputValue(e.target.value);
    }
    

    return{
        handleForm,
        handleInputChange,
        q_params
    }

}