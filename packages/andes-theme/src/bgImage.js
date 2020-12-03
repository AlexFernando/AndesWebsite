import React from "react";
import {connect, styled } from "frontity";
import bgImage from "./images/link3.jpg";
import LinkButton from "./LinkButton";
import {MarginTopContainer} from './Filosofia';

const Content = styled.div`  
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
`

const TextoImagen = styled.div`

    background-image: linear-gradient(to top, rgba(34,49,63, .5), rgba(34, 49, 63, .6));
    color: #FFF;
    display: flex;
    padding: 1.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
   
    @media(min-width: 768px) {
        display: flex;
        height: 573px;
        padding: 6rem;
    }

    h1 {
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: 4px;
        margin-top: 10rem;

        @media(min-width: 768px) {
            font-size: 4.5rem;
            flex-basis: 70%;
            margin-top: 0rem;
        }
    }

    p {
        font-size: 1.2rem;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.8;
        font-family: 'Montserrat', sans-serif;

        @media(min-width: 768px) {
            font-size: 1.3rem;
            flex-basis: 70%;
            margin-bottom: 4rem;
            margin-right: 10rem;
        }
    }    
`

export const ButtonAction = styled.button`
    display: flex;
    justify-content: center;
    background-color: #f07723 ;
    align-items: center;
    padding: 1.5rem;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    

    @media(min-width: 768px) {
        flex-basis: 20%;
    }

    &:hover {
        background-color: #F05523;
        transition: all 0.4s;
    }
`;


const BgImage = () => {
    return (
            <MarginTopContainer>
                <Content>
                    <TextoImagen>
                        <h1>Respuestas Locales frente a la crisis del COVID-19</h1>
                        <p>Estamos trabajando para proporcionar recursos a nuestros socios indígenas, apoyar a nuestro personal de trabajo, y re-imaginar formas de trabajar.</p>
                        <ButtonAction>
                            <LinkButton href="/">Saber Mas</LinkButton>
                        </ButtonAction>                
                    </TextoImagen>
                </Content>
            </MarginTopContainer>
     );
}
 
export default connect(BgImage);