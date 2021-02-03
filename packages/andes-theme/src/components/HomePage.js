import React from 'react';
import {connect, styled } from "frontity";
import imgResearch from '../static//images/link2.jpg';
import homeNews from '../static/images/homenews.jpeg';
import potatoPark from '../static/images/1.jpeg';
import personas25 from '../static/images/FotogrupalANDESytecnicosscaled.jpg'
import proyectos25 from '../static/images/parquepapa.jpg'
import publicaciones25 from  "../static/images/publicaciones/the-culinary-sanctuary-of-the-potato-park.png"
import Link from './Link'

export const SectionText = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           -webkit-justify-content: center;
           justify-content: center;
   -webkit-box-align: center;
       -ms-flex-align: center;
           -webkit-align-items: center;
           align-items: center;
    padding: 3rem 2rem 1rem 2rem;

    @media(max-width: 768px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 3rem 1rem 1rem 1rem;
    }

   div {
       display: -webkit-box;
       display: -ms-flexbox;
       display: -webkit-flex;
       display: flex;
       -webkit-box-pack: center;
           -ms-flex-pack: center;
       -webkit-justify-content: center;
               justify-content: center;
       -webkit-box-align: center;
           -ms-flex-align: center;
        -webkit-align-items: center;
               align-items: center;
       -webkit-box-orient: vertical;
       -webkit-box-direction: normal;
           -ms-flex-direction: column;
       -webkit-flex-direction: column;
               flex-direction: column;
       padding: 1rem 2rem 1rem 2rem;

       @media(max-width: 768px) {
           padding: 1rem;
       }

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
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           -webkit-box-pack: center;
               -ms-flex-pack: center;
           -webkit-justify-content: center;
                   justify-content: center;
           -webkit-box-align: center;
               -ms-flex-align: center;
           -webkit-align-items: center;
                   align-items: center;
       
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
    
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-pack: center;
        -ms-flex-pack: center;
    -webkit-justify-content: center;
            justify-content: center;
    
    -webkit-box-align: center;
        -ms-flex-align: center;
    -webkit-align-items: center;
            align-items: center;
    padding: 2rem;

    @media (max-width: 768px){
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 0rem;
    }
`;

const CardsHome = styled.div`
    display: -webkit-box;
  
  display: -ms-flexbox;
 
  display: -webkit-flex;
 
  display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
       -ms-flex-direction: column;
           -webkit-flex-direction: column;
           flex-direction: column;
   margin: 1rem 2rem;
   -ms-flex-preferred-size: 33.33%;
       -webkit-flex-basis: 33.33%;
           flex-basis: 33.33%;
   background-color: #fff;

   @media (max-width: 768px){
       margin: 1rem;
   }

   div {
       position: relative;
       img {
           width: 100%;
           align-self: center;
           max-height: 40vh; /**new line image height */
       }
       strong {
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           -webkit-box-pack: center;
               -ms-flex-pack: center;
                   -webkit-justify-content: center;
                   justify-content: center;
           background-color: #f07723 ;
           -webkit-box-align: center;
               -ms-flex-align: center;
                   -webkit-align-items: center;
                   align-items: center;
           position: absolute;
           padding: .5rem;
           border-radius: .5rem;
           top: -.5rem;
           left: -1.2rem;
           font-size: .8rem;
           color: #fff;
           -webkit-transform: rotate(-30deg);
               -ms-transform: rotate(-30deg);
                   transform: rotate(-30deg);
       }
   }


   h3 {
       color: #44841a;
       text-align: center;
   }



   span {
       padding: 1rem 1rem 2rem 1rem;
       font-weight: 400;
       font-size: 1rem;  
       text-align: center;      
   }

   div {
       display: -webkit-box;
       display: -ms-flexbox;
       display: -webkit-flex;
       display: flex;
       -ms-flex-preferred-size: 50%;
       -webkit-flex-basis: 50%;
               flex-basis: 50%;
       -webkit-box-pack: center;
           -ms-flex-pack: center;
       -webkit-justify-content: center;
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
                <h1>Welcome to ANDES</h1>              
                <p>
                ANDES actively works on issues of biodiversity conservation, indigenous rights, and sustainable development. Furthermore, we promote the horizontal exchange of experiences and policies which value traditional and indigenous knowledge and contribute to the global dialogue on climate change.
                </p>

                <div>
                    <Link href="/filosofia">Explore</Link>
                </div>
            </div>
        </SectionText>

        <SectionHomePage>
            <CardsHomeContainer>
                <CardsHome>
                    <div>
                    <img src={personas25} />
                    </div>
               
                    <h3>25 PEOPLE</h3>
                             
                    <span>
                        As part of our 25th anniversary celebrations, ANDES would like to thank everyone who has contributed to institutional development, collaborative research and knowledge sharing.
                    </span>
                    <div>
                        <Link href="/aniversariopersonas" >READ MORE</Link>
                    </div>
 
                </CardsHome>
                <CardsHome>
                    <div>
                        <img src={proyectos25} />
                    </div>
               
               
                    <h3>25 PROJETS, EXCHANGES Y CAMPAINGS</h3>
                        
                    <span>
                        We would like to share some of the results of the past projects, campaigns and events of ANDES, which, of course, are only possible thanks to the important contributions of our partners.                   
                    </span>
                    
                    <div>
                        <Link href="/aniversarioproyectos" >READ MORE</Link>
                    </div>
                   
                </CardsHome>

                <CardsHome>
                    <div>
                        <img src={publicaciones25} />
                    </div>

                    
                    <h3>25 PUBLICATIONS</h3>
                   
                    <span>
                        We would like to share some of the results of our research through publications which, of course, are only possible thanks to the important contributions of our partners.
                    </span>
                    
                    <div>
                        <Link href="/aniversariopublicaciones" >READ MORE</Link>
                    </div>
                   
                </CardsHome>
            </CardsHomeContainer>
        </SectionHomePage>       

        <SectionText>
            <div>  
                <h1>Pluriversity - Yachay Kuychi</h1>              
                <p>
                    The Yachay Kuychi Pluriversity (Rainbow of Knowledge), is an international institution of intercultural education and research, and a center of excellence in indigenous food systems and biocultural landscapes
                </p>
                
                <div>
                    <Link href="/quienessomos">LEARN</Link>
                </div>
            </div>

            <div>  
                <h1>Potato Park</h1>              
                <p>
                    The Potato Park is located in the Pisac district, approximately 40 kilometers from the city of Cusco (Peru), in the Sacred Valley of the Incas. Covering an area of ​​9280 hectares and located at a height between 3400 and 4600 meters above sea level.
                </p>
                <div>
                    <Link href="/parquedelapapa-pisac">LEARN</Link>
                </div>
            </div>
        </SectionText>


        <SectionHomePage>
            <CardsHomeContainer>
                <CardsHome>
                    <div>
                    <img src={homeNews} />
                    <strong>News</strong>
                    </div>
                        <h3>Indigenous Resilience</h3>
                        <span>
                            From the Mongolian Steppes to the Andean Mountains
                        </span>
                    <div>
                        <a href="https://www.culturalsurvival.org/publications/cultural-survival-quarterly/indigenous-resilience-mongolian-steppes-andean-mountains" target="_blank" rel="noopener" >READ MORE</a>
                    </div>
 
                </CardsHome>
                <CardsHome>
                    <div>
                        <img src={imgResearch} />
                        <strong>Event</strong>
                    </div>
               
               
                    <h3>Anniversary ANDES</h3>
                        
                    <span>
                        Join us, to the celebration of 25 years safeguarding the biocultural heritage
                    </span>
                    
                    <div>
                        <a href="/" >READ MORE</a>
                    </div>
                   
                </CardsHome>

                <CardsHome>
                    <div>
                        <img src={potatoPark} />
                        <strong>Publication</strong>
                    </div>

                    
                    <h3>Research</h3>
                   
                    <span>
                        Interspecies respect and Potato Conservation in the Peruvian cradle of domestication
                    </span>
                    
                    <div>
                        <a href="http://andes.center/wp-content/uploads/2018/04/ASHS_28-2018-4_PIMBERT.pdf" target="_blank" rel="noopener" >READ MORE</a>
                    </div>
                   
                </CardsHome>
            </CardsHomeContainer>
        </SectionHomePage>

        </>
    );
}
 
export default connect(HomePage);