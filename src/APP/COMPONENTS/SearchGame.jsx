import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { useFetch } from "../../DATA/useFetch"
import { useSearchForm } from "../../DATA/useSearchForm"
import { GameCover } from "./index"

export const SearchGame = ()=>{

    const {handleForm,handleInputChange,q_params} = useSearchForm()
    const {gameList,load} = useFetch()

    return <SearchResult className="bg-dark" >

<div className="container p-5 my-5 p-5">

<form className="row p-5 g-3 d-flex aling-items-center justify-content-center border" onSubmit={handleForm} >
<div className="col-auto">
<input type="text" className="form-control" placeholder="Search Game Name" onChange={handleInputChange} />
</div>
<div className="col-auto ">
<button type="submit" className="btn btn-primary">Search</button>
</div>
</form>

     <div className="p-5 m-5">

             {
                load && gameList.map((game)=>{
                    if(game.title.includes(q_params)) return <GameCover data = {game} />
                })
             }
       
     </div>

    </div>
</SearchResult>
}


const SearchResult = styled.div`
    
    padding: 150px 0;
    margin: 50px 0;

`