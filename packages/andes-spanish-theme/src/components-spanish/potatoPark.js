import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import imgAgricultores from '../static/images/parquepapa.jpg';
import imgSistemaAyllu from '../static/images/parquepapa2.jpg';
import imgInnovacioneBio from '../static/images/link4.jpeg';

import {faListAlt, faArrowAltCircleRight, faMountain, faMale, faLanguage, faExclamationTriangle, faTractor, faSeedling, faHiking, faUtensils, faHands, faCarrot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIconList, FontAwesomeIconStyled, BriefSection, InfoItem} from './TerritoriosCulturales';

import { VerticalBorder } from './Dropdown';


export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem 2rem 2rem;

    @media(max-width: 768px) {
        padding: 0 1rem 0 1rem;
    }

    p {
        padding: 2rem 25rem 0 4rem;
        line-height: 1.5;
        font-size: 1.1rem;
        color: #545454;
        margin-bottom: 0;

        @media(max-width: 768px) {
            padding: 0 1rem 0 1rem;
            font-size: 1rem;
        }
    }
`;

export const MainParagraph = styled.span`
        padding: 0 25rem 0 4rem;
        line-height: 1.5;
        font-size: 1.4rem;
        color: #4c4c4c;

        @media(max-width: 768px) {
            padding: 0 1rem 0 1rem;
            font-size: 1.2rem;
        }
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    flex-basis: 33.33%;
    flex-grow: 1;
    align-items: center;
    background-color: #eaeade;
    line-height: 1.2;
    margin: 2rem;
    border-radius: 1rem;
    padding-bottom: 1.5rem;

    @media (max-width: 768px){
        margin: 1rem 0 1rem 0;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 1rem 1rem 0 0;        
    }

    h3 {
        color: #44841a;
        padding: 0 1rem 0 1rem;
    }

    span {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: 400;
        font-size: 1rem;
        color: #545454;
    }
    
    a {
        text-decoration: none;
        background-color: #f07723;
        color: #fff;
        padding: .8rem;
        border-radius: 10px;
    }
`;

const SectionInfoContainer = styled.div`
    margin: 2rem 0;
    h2{
        text-align: center;
    }
`;

const FastInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    margin: 4rem 0;

    @media(max-width: 768px) {
        flex-direction: column;

        div {
            margin: 1rem 0;
        }
    }

    p {
        color: #000;
        padding: 0;
    }
`;

const PotatoPark = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Parque de la Papa - Pisaq
                </Title>
                <Separator></Separator>
                <SubTitle>
                    El Sistema Ayllu<br></br>Innovaciones Bioculturales
                </SubTitle>
                
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. 
                    Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades 
                    indígenas que viven aquí: no solamente cientos de variedades cultivadas pero igualmente las especies silvestres 
                    emparentadas, el paisaje y sus elementos que incluyen también conocimientos, tradiciones, innovaciones y la cosmovisión 
                    de los más de 6000 habitantes.
                </MainParagraph>

               
                <SectionInfoContainer>
     

                <FastInfo>
                    <div>
                        <FontAwesomeIconStyled icon={faMountain}/>
                        <h3>Area</h3>
                        <p>9820 Hectáreas</p>
                    </div>

                    <div>
            
                        <FontAwesomeIconStyled icon={faMale}/>
                        <h3>Población</h3>
                        <p>6000 habitantes</p>
                    </div>

                    <div>
                        <FontAwesomeIconStyled icon={faLanguage}/>
                        <h3>Etnia</h3>
                        <p>Quechua</p>
                    </div>
                    <div>
                        <FontAwesomeIconStyled icon={faExclamationTriangle}/>
                        <h3>Pobreza</h3>
                        <p>70% de la población <br></br>indígena de Cusco vive en pobreza</p>
                    </div>
                </FastInfo>

                </SectionInfoContainer>

                <BriefSection>

                    <InfoItem>
                        
                        <FontAwesomeIconStyled icon={faListAlt}/>
                        <h3>Ecosistema/Ecología</h3>
                        <p>
                            Altura entre 3200 y 5000 metros sobre el nivel del mar
                        </p>
                        <p>Uso mixto de suelos, inclutendo campos rotacional (muyuys), campos de cultivo permanente(chacras), arbustos y bosques nativos, bosque no-nativos, areas de pastoreo, lagos, ríos y humedales</p>
                    </InfoItem>
                    <VerticalBorder></VerticalBorder>

                    <InfoItem>
                        <FontAwesomeIconStyled icon={faListAlt}/>
                        
                        <h3>Diversidad Biológica y Genética</h3>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Diversos cultivos tradicionales como tarwi, quinoa, kiwicha, maíz, habas, olluca, oca.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>1400 variedades de papa nativa y otros tubérculos andinos</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Crianza de animales proveedores de carne (cuy, alpaca), lana de oveja, llama y alpaca; medicinas.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Microgenocentro de domesticación. 3 especies - silvestres de papa.</li> 
                        </ul>
                    </InfoItem>
                    <VerticalBorder></VerticalBorder>
                    <InfoItem>

                        <FontAwesomeIconStyled icon={faListAlt}/>
                    
                        <h3>Comunidades</h3>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Cuyo Grande</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Sacaca</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Chawaytire</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Amaru</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Pampallaqta</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Paru Paru</li>
                        </ul>
                    </InfoItem>
                </BriefSection>

                <SectionInfoContainer>
                    <h2>Actividades económicas</h2>

                        <FastInfo>
                            <div>
                                <FontAwesomeIconStyled icon={faTractor}/>
                                <h3>Agricultura</h3>
                            </div>

                            <div>
                    
                                <FontAwesomeIconStyled icon={faSeedling}/>
                                <h3>Empresa de semillas</h3>
                            </div>

                            <div>
                                <FontAwesomeIconStyled icon={faHiking}/>
                                <h3>Agro-ecoturismo</h3>
                            </div>
                        </FastInfo>

                        <FastInfo>
                            <div>
                                <FontAwesomeIconStyled icon={faUtensils}/>
                                <h3>Gastronomía</h3>
                            </div>

                            <div>
                                <FontAwesomeIconStyled icon={faHands}/>
                                <h3>Artesanía</h3>
                            </div>
                            <div>
                                <FontAwesomeIconStyled icon={faCarrot}/>
                                <h3>Productos Naturales</h3>
                            </div>
                        </FastInfo>
                </SectionInfoContainer>
                
                <CardsContainer>
                    <Card>
                        <img src={imgInnovacioneBio} />

                        <h3>Innovaciones bioculturales en el Parque de la Papa</h3>

                        <span>
                            El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2018/07/G03917.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>


                    <Card>
                        <img src={imgSistemaAyllu} />

                        <h3>El sistema Ayllu en el Parque de la Papa</h3>

                        <span>
                    El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="https://satoyama-initiative.org/old/the-ayllu-system-of-the-potato-park/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>

                    <Card>
                        <img src={imgAgricultores} />

                        <h3>Agricultores Peruanos puede salvar el planeta</h3>

                        <span>
                            El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="https://modernfarmer.com/2019/12/how-peruvian-potatoes-might-be-key-to-feeding-the-planet/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
            
        </MarginTopContainer>
    );
}
 
export default connect(PotatoPark);