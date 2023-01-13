import { freeGame } from "../../DATA/freeGames"
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { useFetch } from "../../DATA/useFetch";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export const FullGame=()=>{

    const params = useParams();
    const {load,gameList} = useFetch();
   
    const [gameData, setGameData] = useState(false);

    useEffect(()=>{
        
        gameList.map(game => {
            if(game.id == params.id){
                
               return setGameData(game)
            } 
        })

    },[load])



    if(load){

        const {developer,freetogame_profile_url, game_url, genre, id,platform,publisher, 
              release_date,short_description,thumbnail,title,} = gameData

           
          return <div className="bg-dark p-5">
                 
                 <div className="text-center my-5 border p-3">
                 <Img src = {thumbnail} className = "p-2 mb-2" />
                   <h1>{title}</h1>             
                
                   <Box>

                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Developers :  </h5>   <h5>  {developer}  </h5>                </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Publisher :   </h5>   <h5>  {publisher} </h5>                 </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Gender :      </h5>   <h5>  {genre}</h5>                      </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Console :     </h5>   <h5>  {platform}</h5>                   </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Date :        </h5>   <h5>  {release_date}  </h5>             </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Description : </h5>   <h5>   {short_description} </h5>         </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Free game :   </h5>   <h5>  {freetogame_profile_url} </h5>    </div>
                   <div className="py-3 text-light d-md-flex align-item-center justify-content-center " > <h5 className="text-info px-2"> Game Url :    </h5>   <h5>  {game_url} </h5>                  </div>

                   </Box>
                </div>

             </div>


   
    
    }

    else if (!load) return <Spinner />
    


}


const Img = styled.img`
width: 100%;
max-width: 250px;


`

const Box=styled.div`
overflow: hidden;
`










{/* {
 gameList.map(game => {
     if(game.id == params.id) return <>

         <Img src = {game.thumbnail} />
         <h2>{game.title}</h2>
     </>
 })
}    */}