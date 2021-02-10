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
                    Potato Park - Pisaq
                </Title>
                <Separator></Separator>
                <SubTitle>
                    The Ayllu System<br></br>Biocultural innovations
                </SubTitle>
            
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    The Potato Park is not just a conservation initiative for various varieties of potatoes. It is, above all, a bio-cultural territory dedicated to the conservation of the heritage of six indigenous communities that live here: not only hundreds of cultivated varieties but also related wild species, the landscape and its elements that also include knowledge, traditions, innovations and the worldview of the more than 6000 inhabitants.
                </MainParagraph>
                
                <SectionInfoContainer>
                <FastInfo>
                    <div>
                        <FontAwesomeIconStyled icon={faMountain}/>
                        <h3>Area</h3>
                        <p>9820 Hectares</p>
                    </div>

                    <div>
            
                        <FontAwesomeIconStyled icon={faMale}/>
                        <h3>Population</h3>
                        <p>6000 inhabitants</p>
                    </div>

                    <div>
                        <FontAwesomeIconStyled icon={faLanguage}/>
                        <h3>Ethnicity</h3>
                        <p>Quechua</p>
                    </div>
                    <div>
                        <FontAwesomeIconStyled icon={faExclamationTriangle}/>
                        <h3>Poverty</h3>
                        <p>70% of the  indigenous <br></br>population of Cusco live in poverty condition</p>
                    </div>
                </FastInfo>

                </SectionInfoContainer>


                <BriefSection>

                    <InfoItem>
                        
                        <FontAwesomeIconStyled icon={faListAlt}/>
                        <h3>Ecosistema/Ecología</h3>
                        <p>
                            Height between 3200 and 5000 meters above sea level
                        </p>
                        <p>
Mixed use of soils, including rotational fields (muyuys), permanent cultivation fields (chacras), native shrubs and forests, non-native forests, grazing areas, lakes, rivers and wetlands</p>
                    </InfoItem>
                    <VerticalBorder></VerticalBorder>

                    <InfoItem>
                        <FontAwesomeIconStyled icon={faListAlt}/>
                        
                        <h3>Biological and Genetic Diversity</h3>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Various traditional crops such as tarwi, quinoa, kiwicha, corn, beans, olluco, oca.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>1400 varieties of native potato and other Andean tubers</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Raising animals that provide meat (guinea pig, alpaca), sheep's wool, llama and alpaca; medicines.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Microgenecenter of domestication. 3 species - wild potato.</li> 
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
                    <h2>Economical Activities</h2>

                        <FastInfo>
                            <div>
                                <FontAwesomeIconStyled icon={faTractor}/>
                                <h3>Agriculture</h3>
                            </div>

                            <div>
                    
                                <FontAwesomeIconStyled icon={faSeedling}/>
                                <h3>Seed company</h3>
                            </div>

                            <div>
                                <FontAwesomeIconStyled icon={faHiking}/>
                                <h3>Agro-ecoturism</h3>
                            </div>
                        </FastInfo>

                        <FastInfo>
                            <div>
                                <FontAwesomeIconStyled icon={faUtensils}/>
                                <h3>Gastronomy</h3>
                            </div>

                            <div>
                                <FontAwesomeIconStyled icon={faHands}/>
                                <h3>Crafts</h3>
                            </div>
                            <div>
                                <FontAwesomeIconStyled icon={faCarrot}/>
                                <h3>Natural Products</h3>
                            </div>
                        </FastInfo>
                </SectionInfoContainer>

            
                <CardsContainer>
                    <Card>
                        <img src={imgInnovacioneBio} />

                        <h3>Biocultural innovations in the Potato Park</h3>

                        <span>
                        The Potato Park is not just an initiative to conserve varieties of potatoes. It is, above all, a biocultural territory dedicated to the conservation of the heritage of the indigenous communities that live there. 
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2018/07/G03917.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>


                    <Card>
                        <img src={imgSistemaAyllu} />

                        <h3>The Ayllu System of the Potato Park</h3>

                        <span>
                            Not only hundreds of cultivated potato varieties but also the related wild species, the landscape and all its elements which include the knowledge, traditions, innovations, and worldview of the more than 6,000 inhabitants.
                        </span>

                        <a href="https://satoyama-initiative.org/old/the-ayllu-system-of-the-potato-park/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>

                    <Card>
                        <img src={imgAgricultores} />

                        <h3>Peruvian Farmers could Save the Planet</h3>

                        <span>
                            Not only hundreds of cultivated potato varieties but also the related wild species, the landscape and all its elements which include the knowledge, traditions, innovations, and worldview of the more than 6,000 inhabitants.
                        </span>

                        <a href="https://modernfarmer.com/2019/12/how-peruvian-potatoes-might-be-key-to-feeding-the-planet/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
            
        </MarginTopContainer>
    );
}
 
export default connect(PotatoPark);