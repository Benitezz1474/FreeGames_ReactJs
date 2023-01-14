import { Link } from "react-router-dom"
import styled from "styled-components"

export const Home=()=>{
    

    
    return <Content className="bg-dark">

    <Banner> 
        <BannerText>
            <p className="text-light my1">Visita nuestra recopilación de datos sobre juegos!</p>
            <button className="btn btn-primary my-2" >Get Started!!!</button>
        </BannerText>
    </Banner>
    
              <div className="container">
   <BoxServices>

 <Service>
       <Img src = "./IMGs/Box_info_1.jpeg" /> 
       <P>No te pierdas TODA la variedad de juegos, incluidos juegos de ultima generación!!</P>
 </Service>


 <Service>
       <P>Recuerda que NO necesitas graficas poderosas para sacar partida!</P>
       <Img src = "./IMGs/Box_service_2.jpg" /> 
 </Service>


 <Service>
       <Img src = "./IMGs/Box_info_3.JPG" /> 
       <P>Nuestro Objetivo es es brindarte la mayor información posible acerca de cada juego que existe</P>
 </Service>

   </BoxServices>
              </div>

    </Content>
}


const Content = styled.div`
    
    width: 100%;
    height: auto;
    margin-top: 52px;
`

const Banner = styled.div`
    
    width: 100%;
    /* max-width: 1400px; */
    /* height: 100%; */
    min-height: 300px;
    
    background-image: url("./IMGs/Banner.JPG");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    position: relative;

    @media screen and (min-width: 1020px) {
        height: 70vh;
        margin: 0 auto;
    }
    
    `


const ContentIMG = styled.img`
        
        width: 100%;
        max-width: 350px;
        height: auto;
    
    `

const Img = styled.img`

width: 100%;
max-width: 520px;
border-radius: 20px;

`;


const BannerText= styled.div`

width: 100%;
max-width: 350px;
padding: 20px;
background-color: #3C3C3C;
position: absolute;
top: 20%;
left: 10%;

@media screen and (max-width: 680px) {
    display: none;
}

`

const BoxServices = styled.div`

width: 100%;
padding: 50px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;

&&:nth-child(odd){
    /* display: none; */
}

`;

const Service = styled.div`

width: 100%;
background: linear-gradient(#ffe790db, #505050);
border-radius: 20px;
padding: 20px 10px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin: 65px 0;

`

const P = styled.p`
padding: 20px;
max-width: 600px;
font-size: 30px;
color: #fff;

@media screen and (max-width:680px) {
  
    font-size: 20px;
}

`









