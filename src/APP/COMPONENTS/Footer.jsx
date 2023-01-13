import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer =()=>{
    return <FooterContent className="bg-dark"> 

        <BoxFooter>
            <ListFooter>
                     <h2 className="text-light">Social Media</h2>


                    <Link className="text-light" >
                        <li className="py-2">Youtube</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">Instagram</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">Facebook</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">TikTok</li>
                        </Link>
            </ListFooter>
        </BoxFooter>

        <BoxFooter>

        <ListFooter>
                     <h2 className="text-light">About Us</h2>


                    <Link className="text-light" >
                        <li className="py-2">Development</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">IOS</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">Android</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2">Figma</li>
                        </Link>
            </ListFooter>
      
        </BoxFooter>
        
        <BoxFooter>
       
        <ListFooter>
                     <h2 className="text-light">Contact Me</h2>


                    <Link className="text-light" >
                        <li className="py-2" >Email Adress</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2" >Telephon Number</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2" >GitHub</li>
                        </Link>


                    <Link className="text-light" >
                        <li className="py-2" >Personal Portfolio</li>
                        </Link>
            </ListFooter>

        </BoxFooter>


    </FooterContent>
}

const FooterContent = styled.footer`
    

    width: 100%;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

`

const BoxFooter=styled.div`
    
    padding: 50px;
`

const ListFooter = styled.nav`
    
    width: 100%;
    height: auto;
`