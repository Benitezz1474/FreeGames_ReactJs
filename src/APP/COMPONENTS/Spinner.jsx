import { Content } from "./Content"

export const Spinner=()=>{
    
    return <Content>
        <div className="d-flex justify-content-center m-5 p-5">
    <div className="spinner-border " role="status">
      <span className="sr-only"></span>
    </div>
  </div>
    </Content>
}