import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card, MainParagraph} from './potatoPark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faListAlt, faLeaf, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { VerticalBorder } from './Dropdown';
import parquedemaiz from '../static/images/estudioparquemaiz.png';
import applepark from '../static/images/applePark.jpg';
import territorio from '../static/images/territoriobio.png';
import territorio2 from '../static/images/territoriobio2.png';
import territorio3 from '../static/images/territoriobio3.jpg';



export const SubSectionTitle = styled.h2`
       color: #44841a;
       padding: 2rem 1rem 0 1rem;
       font-size: 1.8rem;
       text-align: center;
`;

export const BriefSection = styled.div`
    display: flex;
    padding: 2rem 4rem;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1rem;
    }
`

export const InfoItem = styled.div`
    flex-basis: 33.33%;
    padding: 0 2rem;
    text-align: center;

    @media(max-width: 768px) {
        padding: 1rem 1rem;
    }

    p {
        line-height: 1.5;
    }
    
    h3 {
        color: #44841a;
        padding: 0 1rem 0 1rem;
    }

    ul {
        margin-top: 2rem;
        padding-left: 0;
        text-align: left;
    }

    li {
        list-style: none;
        margin-top: 1rem;
    }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: #44841a;
    font-size: 3rem;
`;

export const FontAwesomeIconList = styled(FontAwesomeIcon)`
    color: #44841a;
    margin-right: .5rem;
`;

const AditionalContainer = styled.div`
    
    display: flex;
    padding: 1rem 2rem 4rem 2rem;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
            flex-direction: column;
            padding: 0rem;
        }

    a{
        margin: 0 1rem;
        background-color: #eaeade;
        padding: 1rem;
        border-radius: 1rem;

        @media(max-width: 768px) {
            margin: .5rem 0;
        }

    }
    img {
        max-width: 100%;
        max-height: 20vh;
    }
`;

const TerritoriosCulturales = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Biocultural Territories
                </Title>
                <SubTitle>
                    Endogenous development <br></br> Conservation of biodiversity
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    Land use mosaics encompassing traditional and indigenous land tenure, production and exchange systems, cultural identity, community organization, and simultaneous objectives of endogenous development and biodiversity conservation.
                </MainParagraph>
                <p>
                    Asociación ANDES, in collaboration with indigenous communities in Peru and around the world, has worked during the last several decades to define, expand, and protect biocultural heritage territories. 
                </p>

                <p>
                    Through learning exchanges facilitated by the International Network of Mountain Indigenous Peoples (INMIP), indigenous communities in countries ranging from Kenya to India to Kyrgyzstan have worked to implement the biocultural heritage model.
                </p>
            </SectionContainer>

            <BriefSection>

                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faQuestionCircle}/>
                    <h3>WHY?</h3>
                    <p>
                        The current erosion of genetic and cultural diversity is unprecedented, and it is becoming increasingly difficult for communities around the world to cope with the adverse impacts of climate change, threats to food security, and water scarcity.                    
                    </p>
                    
                    <p>
                        Biocultural heritage territories, which use integrated landscape management, offer a clear model for adapting to change.
                    </p>
                </InfoItem>
                <VerticalBorder></VerticalBorder>
                
                <InfoItem>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>OUR AMBITIONS</h3>

                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Conserve agrobiodiversity</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Strengthen food security</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Improve livelihoods</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Protect biocultural heritage</li> 
                    </ul>

                </InfoItem>
                <VerticalBorder></VerticalBorder>
                <InfoItem>
                
                    <FontAwesomeIconStyled icon={faLeaf}/>
                    
                    <h3>Areas of impact</h3>
                
                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Agrobiodiversity</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Cultural diversity</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Poverty and inequality</li>
                    </ul>
                </InfoItem>
            </BriefSection>

            <SubSectionTitle>Case Studies</SubSectionTitle>
            <CardsContainer>
                <Card>
                    <img src={applepark} />

                    <h3>Parque de manazana y Parque de Trigo, Tajikistan</h3>

                    <span>
                        Discover the story of how indigenous farmers in Tajikistan are implementing the biocultural heritage model to protect their diversity of wheat and apple. The center of origin for these two world-important crops is in the Central Asian lands of these farmers.
                    </span>

                    <a href="https://andes.org.pe/wp-content/uploads/2020/07/Apple-and-Wheat-Park-Case-Study.pdf" target="_blank" rel="noopener" >Ver Estudio</a>
                </Card>

                <Card>
                    <img src={parquedemaiz} />

                    <h3>Maize Park, Peru</h3>

                    <span>
                        Discover the story of how indigenous farmers in Tajikistan are implementing the biocultural heritage model to protect their diversity of wheat and apple. The center of origin for these two world-important crops is in the Central Asian lands of these farmers.
                    </span>

                    <a href="http://andes.org.pe/wp-content/uploads/2020/03/Maize-Park-Case-Study.pdf" target="_blank" rel="noopener" >Ver Estudio</a>
                </Card>
            </CardsContainer>

            <SubSectionTitle>Additional Resources</SubSectionTitle>
            
            <AditionalContainer>
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio2} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio3} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={parquedemaiz} /></a>
            </AditionalContainer>
        </MarginTopContainer>
    );
}
 
export default connect(TerritoriosCulturales);