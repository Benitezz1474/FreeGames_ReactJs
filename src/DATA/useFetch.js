import { useEffect, useState } from "react"
import { freeGame } from "./freeGames"

export const useFetch = () =>{

    const [gameList, setGameList] = useState([])
    const [load, setLoad] = useState(false);

   
    useEffect(()=>{
        freeGame()
        .then(data => setGameList(data))
        .finally(() => setLoad(true))
        .catch(()=> setLoad("error"))
    },[])

    return {
        gameList,
        load
    }
}