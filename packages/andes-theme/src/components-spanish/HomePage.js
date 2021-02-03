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
                <h1>Bienvenidos a ANDES</h1>              
                <p>ANDES trabaja activamente en los temas de biodiversidad, derechos indígenas y desarrollo solidario. Además promovemos el intercambio horizontal de experiencias y las políticas que valoran el conocimiento tradicional indígena para aportar en el diálogo global sobre cambios climáticos.</p>
                <div>
                    <Link href="/es-filosofia">Explorar</Link>
                </div>
            </div>
        </SectionText>

        <SectionHomePage>
            <CardsHomeContainer>
                <CardsHome>
                    <div>
                    <img src={personas25} />
                    </div>
               
                    <h3>25 PERSONAS CLAVE</h3>
                             
                    <span>
                    Como parte de las celebraciones de nuestro 25 aniversario, ANDES desea agradecer a todos los que han contribuido al desarrollo institucional, la investigación colaborativa y el intercambio de conocimientos
                    </span>
                    <div>
                        <Link href="/es-aniversariopersonas" >LEER MAS</Link>
                    </div>
 
                </CardsHome>
                <CardsHome>
                    <div>
                        <img src={proyectos25} />
                    </div>
               
               
                    <h3>25 PROYECTOS, INTERCAMBIOS Y CAMAPAÑAS</h3>
                        
                    <span>
                        Nos gustaría compartir algunos de los resultados de los proyectos, campañas y eventos pasados ​​de ANDES, que, por
                        supuesto, solo son posibles gracias a las importantes contribuciones de nuestros socios.                    
                    </span>
                    
                    <div>
                        <Link href="/es-aniversarioproyectos" >LEER MAS</Link>
                    </div>
                   
                </CardsHome>

                <CardsHome>
                    <div>
                        <img src={publicaciones25} />
                    </div>

                    
                    <h3>25 PUBLICACIONES</h3>
                   
                    <span>
                        Nos gustaría compartir algunos de los resultados de nuestras investigaciones a través de publicaciones que, por supuesto, solo son posibles
                        gracias a las importantes contribuciones de nuestros socios.
                    </span>
                    
                    <div>
                        <Link href="/es-aniversariopublicaciones" >LEER MAS</Link>
                    </div>
                   
                </CardsHome>
            </CardsHomeContainer>
        </SectionHomePage>       

        <SectionText>
            <div>  
                <h1>Pluriversidad - Yachay Kuychi</h1>              
                <p>La Pluriversidad Yachay Kuychi (Arco Iris de Conocimientos), es una institución internacional de educación e investigación intercultural, y un centro de excelencia en sistemas alimentarios indígenas y Paisajes bioculturales</p>
                <div>
                    <Link href="/es-quienessomos">Informarse</Link>
                </div>
            </div>

            <div>  
                <h1>Parque de la Papa</h1>              
                <p>El Parque de la Papa está ubicado en el distrito de Pisac, aproximadamente a 40 kilómetros de la ciudad de Cusco (Perú), en el Valle Sagrado de los Incas. Cubriendo una superficie de 9280 hectáreas y ubicada en una altura entre 3400 y 4600 metros arriba del nivel del mar.</p>
                <div>
                    <Link href="/es-parquedelapapa-pisac">Conocer</Link>
                </div>
            </div>
        </SectionText>


        <SectionHomePage>
            <CardsHomeContainer>
                <CardsHome>
                    <div>
                    <img src={homeNews} />
                    <strong>Noticia</strong>
                    </div>
               

                 
                    <h3>Indigenous Resilience</h3>
                        
                
                    
                    <span>
                        From the Mongolian Steppes to the Andean Mountains
                    </span>
                    <div>
                        <a href="https://www.culturalsurvival.org/publications/cultural-survival-quarterly/indigenous-resilience-mongolian-steppes-andean-mountains" target="_blank" rel="noopener" >LEER MAS</a>

                    </div>
 
                </CardsHome>
                <CardsHome>
                    <div>
                        <img src={imgResearch} />
                        <strong>Evento</strong>
                    </div>
               
               
                    <h3>Aniversario ANDES</h3>
                        
                    <span>
                        Únete a la celebración de 25 años de trabajo por salvaguardar la herencia cultural
                    </span>
                    
                    <div>
                        <a href="/es-aniversariopersonas" >LEER MAS</a>
                    </div>
                   
                </CardsHome>

                <CardsHome>
                    <div>
                        <img src={potatoPark} />
                        <strong>Publicación</strong>
                    </div>

                    
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

        </>
    );
}
 
export default connect(HomePage);