import React from 'react';
import {connect, styled } from "frontity";
import imgResearch from './static//images/link2.jpg';
import homeNews from './static/images/homenews.jpeg';

export const SectionText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem 1rem 2rem;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 3rem 1rem 1rem 1rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem 2rem 1rem 2rem;

        h1 {
            color: #44841a;
            text-align: center;
        }

        p {
            color: #545454;
            font-size: 1.2rem;
            margin-bottom: 0rem;
            text-align: center;
        }  


    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        a {
            text-decoration: none;
            background-color: #f07723;
            text-transform: uppercase;
            color: #fff;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 2rem;
            font-weight: 700;
        }
    }
}
`;

const SectionHomePage = styled.div` 
    background-color: #eaeaea;
`;

const CardsHomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const CardsHome = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
    flex-basis: 33.33%;
    background-color: #fff;

    img {
        width: 100%;
        height: 20vh;        
    }

    h3 {
        color: #44841a;
        padding: 0 1rem 0 1rem;
    }

    span {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: 400;
        font-size: 1rem;        
    }

    div {
        display: flex;
        flex-basis: 50%;
        justify-content: center;
        margin-bottom: 1rem;

        a {
            text-decoration: none;
            background-color: #44841a;
            color: #fff;
            padding: .8rem;
            border-radius: 10px;
            text-align: center;
        }
    }
`;
 
const HomePage = ({state}) => {
    return ( 
        <>
        <SectionText>
            <div>  
                <h1>Bienvenidos a Andes</h1>              
                <p>ANDES trabaja activamente en los temas de biodiversidad, derechos indígenas y desarrollo solidario. Además promovemos el intercambio horizontal de experiencias y las políticas que valoran el conocimiento tradicional indígena para aportar en el diálogo global sobre cambios climáticos.</p>
                <div>
                    <a href="/filosofia">Explorar</a>
                </div>
            </div>

        </SectionText>

        <SectionHomePage>
            <CardsHomeContainer>
                <CardsHome>
                    
                    <img src={homeNews} />

                    <h3>Indigenous Resilience</h3>
                    
                    <span>
                        From the Mongolian Steppes to the Andean Mountains
                    </span>
                    <div>
                        <a href="https://www.culturalsurvival.org/publications/cultural-survival-quarterly/indigenous-resilience-mongolian-steppes-andean-mountains" target="_blank" rel="noopener" >LEER MAS</a>

                    </div>
 
                </CardsHome>
                <CardsHome>
                    
                    <img src={imgResearch} />

                    <h3>Aniversario Andes</h3>

                    <span>
                        Únete a la celebración de 25 años de trabajo por salvaguardar la herencia cultural
                    </span>
                    
                    <div>
                        <a href="/" >LEER MAS</a>
                    </div>
                   
                </CardsHome>

                <CardsHome>
                    
                    <img src={homeNews} />

                    <h3>Research</h3>

                    <span>
                        Interspecies respect and Potato Conservation in the Peruvian cradle of domestication
                    </span>
                    
                    <div>
                        <a href="http://andes.center/wp-content/uploads/2018/04/ASHS_28-2018-4_PIMBERT.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </div>
                   
                </CardsHome>
            </CardsHomeContainer>
        </SectionHomePage>

        <SectionText>
            <div>  
                <h1>Pluridiversidad - Yachay Kuychi</h1>              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nulla quis sagittis hendrerit. Ut arcu dui, hendrerit ullamcorper tempus id, aliquam sed lacus.</p>
                <div>
                    <a href="/quienessomos">Informarse</a>
                </div>
            </div>

            <div>  
                <h1>Parque de la Papa</h1>              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla nulla quis sagittis hendrerit. Ut arcu dui, hendrerit ullamcorper tempus id, aliquam sed lacus.</p>
                <div>
                    <a href="/parquedelapapa-pisac">Conocer</a>
                </div>
            </div>
        </SectionText>

        </>
    );
}
 
export default connect(HomePage);