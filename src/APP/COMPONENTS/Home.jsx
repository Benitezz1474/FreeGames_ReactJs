import { Link } from "react-router-dom"
import styled from "styled-components"

export const Home=()=>{
    

    
    return <Content className="bg-danger">

    <Banner> </Banner>
    
    {/* <div className="container my-5">
       <div className="options my-5">
        <div className="row ">
            <div className="col-12 col-sm "> <Link to="list" className="d-flex flex-column align-items-center" ><ContentIMG className="border p2 shadow p-3 mb-5 bg-body rounded" src = "./Icons/list.png" />  <h2 className="text-dark">Pokemon List</h2> </Link> </div>
            <div className="col-12 col-sm ">  <Link to="search" className="d-flex flex-column align-items-center"><ContentIMG className="border p2 shadow p-3 mb-5 bg-body rounded" src = "./Icons/search.png" />  <h2 className="text-dark">Search Pokemon</h2> </Link> </div>
            <div className="col-12 col-sm ">  <Link to="" className="d-flex flex-column align-items-center"><ContentIMG className="border p2 shadow p-3 mb-5 bg-body rounded" src = "./Icons/logout.png" />  <h2 className="text-dark">Logout </h2> </Link> </div>
        </div>
       </div>
    </div> */}

    </Content>
}


const Content = styled.div`
    
    width: 100%;
    height: auto;
    margin-top: 52px;
`

const Banner = styled.div`
    
    width: 100%;
    max-width: 1400px;
    height: 100%;
    min-height: 300px;
    
    /* background-image: url("./IMGs/banner_1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */

    @media screen and (min-width: 1020px) {
        height: 40vh;
        margin: 0 auto;
    }
    
    `


const ContentIMG = styled.img`
        
        width: 100%;
        max-width: 350px;
        height: auto;
    
    `