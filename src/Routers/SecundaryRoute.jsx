import { useRoutes } from "react-router-dom"
import { Footer, Home, NavBar, GameList,FullGame, SearchGame } from "../APP/COMPONENTS"
import { Content } from "../APP/COMPONENTS/Content"

const routes = [
{
    path : "/home",
    element : <Home />
},

{
    path : "/list",
    element : <GameList />
},

{
    path : "/:id",
    element : <FullGame />
},

{
    path : "search",
    element : <SearchGame />
}

]

export const SecundaryRoute=()=>{

    const element = useRoutes(routes)

    return <>

    <NavBar />
    <Content>

    
    {element}

    </Content>
    <Footer />

    </>

}