import styled from "styled-components"
import { useForm } from "../DATA/useForm"

export const FormSigIn=({changeForm})=>{

    const {handleForm} = useForm()


    return <FormContent>

    
    <Form  className="animate__heartBeat">
    
         <LabelContent>
         <label htmlFor="user"> <FormImg src="./Icons/user.png" /> </label>
          <FormInput type = "text" placeholder="User" name = "user" id="user" />
         </LabelContent>

          
          <LabelContent>
            <label htmlFor="password"> <FormImg src="/Icons/padlock.png" /> </label>
            <FormInput type = "password" placeholder="Password" name = "password" id = "password"  />
          </LabelContent>
          

          <FormInputSubmit type="submit" defaultValue={"Login"} className="btn btn-primary" onClick={handleForm} />
          

          <ChangeForm onClick={()=>{
            changeForm(true);
          }} >  do you dont have a count? Register! </ChangeForm>



  </Form>
    
    </FormContent>
}



const FormContent = styled.div`

width:100vw;
height:100vh;
background: rgb(12,139,181);
background: linear-gradient(152deg, rgba(12,139,181,1) 0%, rgba(255,0,0,0.6180847338935574) 51%, rgba(255,0,166,0.7413340336134453) 99%);
display:flex;
align-items:center;
justify-content:center;
`

const Form = styled.form`

width: 80%;
max-width:380px;
padding:30px 10px;
margin:50px auto;
background-color:#fff;
border-radius:5px;
`

const LabelContent = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid gray;
    border-radius:5px;


`

const FormImg=styled.img`

width:100%;
max-width: 50px;
`


const FormInput = styled.input`
outline:none;
border:none;
width:100%;
padding:10px 5px;
margin:10px auto;
background-color:#fff;
`


const FormInputSubmit = styled.input`

width:50%;
display:block;
margin: 30px auto 10px auto;

`

const ChangeForm = styled.p`
    
width:50%;
display:block;
margin: 30px 5px 0 5px;
font-size: 10px;
color: blue;
padding: 2px;
border: none;
background-color: #e9e6e6;
`