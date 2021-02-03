import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, MainParagraph, CardsContainer, Card} from './potatoPark'
import transgenicos from '../static/images/transgenicos.jpg';
import {SectionText} from './HomePage';

import {faListAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIconList, FontAwesomeIconStyled} from './TerritoriosCulturales';

export const FixedCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 4rem;
    border-radius: 1rem;
    background-color: #f4f4f4;

    p {
        text-align: right;
    }

    img {
        border-radius: 1rem 1rem 0 0 ;
        width: 100%;
        height: 100%;
    }
`;

const SectionInfoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;

    h3 {
        color: #44841a;
        font-size: 1.5rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        @media (max-width: 768px){
            flex-direction: column;
            justify-content: center;
        }

        li {
            list-style: none;
            font-size: 1.2rem;
            margin-bottom: .8rem;
        }
    }
`

const IframeStyled = styled.iframe`
    width:490px; 
    height:280px;

    
    @media(max-width: 768px) {
        max-width:100%; 
        max-height:100%;
    } 
`;

const Politica = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Incidencias Política
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Transgénicos <br></br> Biopiratería
                </SubTitle>
          
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    ANDES integra asuntos de ética y justicia social y ambiental al trabajo, tales como, el derecho a la tierra, protocolos bioculturales, derechos intelectuales de propiedad, y la negociación de intereses comunes en procesos locales, nacionales e internacionales.
                </MainParagraph>
                
                <SectionInfoList>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>NUESTRAS PRIORIDADES</h3>

                    <div>
                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Derechos indígenas</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Derechos de la Pachamama</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Protección de territorios y paisajes</li> 
                        </ul>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Biopiratería</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Propiedad Intelectual</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Transgénicos</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Cambio climático</li> 
                        </ul>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Soberanía de semillas</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Seguridad Alimentaria</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Conservación de la diversidad biocultural</li>
                        </ul>
                    </div>
                </SectionInfoList>
                
             
            <CardsContainer>
                
                <Card>
                    <img src={transgenicos} />

                    <h3>Rechazando transgénicos en Perú</h3>

                    <span>
                        La asociación ANDES, junto con la asociación de las comunidades del Parque de la Papa, han firmado una declaración en contra de los transgénicos en Perú.
                    </span>

                    <div>
                        <a href="https://www.servindi.org/actualidad/24/06/2020/senor-vizcarra-el-pueblo-peruano-rechaza-los-transgenicos" target="_blank" rel="noopener" >LEER HISTORIA</a>
                    </div>
                </Card>
         
                <Card>
                    <img src={transgenicos} />

                    <h3>Rechazando transgénicos en Perú</h3>

                    <span>
                        La asociación ANDES, junto con la asociación de las comunidades del Parque de la Papa, han firmado una declaración en contra de los transgénicos en Perú.
                    </span>

                    <div>
                        <a href="https://www.servindi.org/actualidad/24/06/2020/senor-vizcarra-el-pueblo-peruano-rechaza-los-transgenicos" target="_blank" rel="noopener" >LEER HISTORIA</a>
                    </div>
                </Card>

            </CardsContainer>


            </SectionContainer>

            <SectionText>

                <div>  
                    <IframeStyled

                        src="https://www.youtube.com/embed/79alPG6G5uc" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                    >
                    </IframeStyled>
                </div>

                <div>  
                    <h1>18 de Octubre del 2020</h1>              
                    <p>Carta Abierta al Señor Presidente de la Republica - Ampliacion de la moratoratia a producción de transgénicos</p>
                    <div>
                        <a href="https://andes.org.pe/wp-content/uploads/2020/10/Carta-Abierta-al-Presidente-de-Peru-Ampliacion-de-la-moratoratia-a-transgenicos-18-10-20.pdf" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>

                <div>  
                    <h1>20 de Octubre del 2020</h1>              
                    <p>Congreso amplía moratoria a producción de transgénicos hasta el 2035.</p>
                    <div>
                        <a href="https://larepublica.pe/economia/2020/10/20/congreso-amplia-moratoria-a-transgenicos-hasta-diciembre-del-2035/?fbclid=IwAR16fczjYrejroXMDUpPQaTJ4pQZ4VP0nSpAGcDRZXbF5KNzdrWSDU9-0FA" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(Politica);