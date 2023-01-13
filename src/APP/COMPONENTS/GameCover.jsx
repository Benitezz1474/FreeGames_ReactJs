import styled from "styled-components"

export const GameCover=({data})=>{

    const {title,thumbnail} = data

      return <CardGame>
                  <Img src={thumbnail} />
                  <h2 className="text-light">{title}</h2>
    </CardGame>
}


const CardGame = styled.div`

width: 100%;
padding: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
/* box-shadow: -5px 5px 20px 0 #41414199; */
text-align: center;
background-color: #0c3818;

`

const Img = styled.img`
width: 100%;
min-width: 260px;
max-width: 410px;
margin: 10px 0;
`