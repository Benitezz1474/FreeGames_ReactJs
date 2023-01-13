import { Routes } from "react-router-dom"
import { Login } from "./Authentication/Login"
import { LoginProvider } from "./CONTEXT/LoginProvider"
import { PrincipalRoute } from "./Routers/PrincipalRoute"

function App() {

  return <>
  
    <LoginProvider>
    <PrincipalRoute />
    </LoginProvider>
    
  
  </>
  
}

export default App
