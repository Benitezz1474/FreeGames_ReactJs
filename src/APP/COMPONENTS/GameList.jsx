import { useEffect, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../../DATA/useFetch"
import { Content } from "./Content"
import { Filter, GameCover,Pagination,Spinner } from "./index";
import "animate.css";

export const GameList=()=>{

    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0);
    const {gameList,load} = useFetch();

    //Filters

    const [filterPlatform, setFilterPlatform] = useState("PC");
    const [dateFilter, setDateFilter] = useState("2005/01/01");
    const [filterGender, setFilterGender] = useState("MMORPG");
  
    // const [filter, setFilter] = useState("PC");
    
    if(load){ return <Content className="bg-dark" >

            <div className="container my-5 py-5 ">

                 <Filter changeDateFilter = {setDateFilter} changeFilterPlatform = {setFilterPlatform} 
                  changeFilterGender = {setFilterGender} filterGender = {filterGender} filterPlatform = {filterPlatform}
                  dateFilter = {dateFilter} />

                <div className="row g-5 ">
                    
                
           {
               gameList.map((game,index) => {
                   
                if ( index < limit  && index >= offset && game.platform.includes(filterPlatform)
                   
                   && game.release_date >= dateFilter && game.genre.includes(filterGender)) return <div className="col animate__animated animate__bounce" key = {game.id}>
                   
                    <Link to = {`/${game.id}`}>
                   
                    <GameCover data = {game}  />
                   
                    </Link>
                   
                   </div>
                })
            }


            </div>
            {/* PAGINATTION */}

           <Pagination changeLimit = {setLimit} changeOffset = {setOffset} limit = {limit} offset = {offset} />


       </div>
    </Content>
    }

    else if(!load) {
        return <Spinner />
    }

    else if(load == "error") return <h1>Sorry, we have error</h1>

}
