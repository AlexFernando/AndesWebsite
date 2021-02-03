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
                    Political Impact
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Transgenics <br></br> Biopiracy
                </SubTitle>
                
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    ANDES integrates matter of ethics and social and environmental justice to work, such as the right to land, biocultural protocols, intellectual property rights, and the negotiation of common interests in local, national and international processes.
                </MainParagraph>

                <SectionInfoList>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>OUR PRIORITIES</h3>

                    <div>
                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Indigenous rights</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Rights of the Pachamama</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Protection of territories and landscapes</li> 
                        </ul>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Biopiracy</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Intellectual property</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Transgenics</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Climate Change</li> 
                        </ul>

                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Seed sovereignty</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Food Safety</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Conservation of biocultural diversity</li>
                        </ul>
                    </div>
                </SectionInfoList>

                <CardsContainer>  
                    <Card>
                        <img src={transgenicos} />

                        <h3>Rejecting Transgenics in Peru</h3>

                        <span>
                            Asociación ANDES, along with the Association of the Communities of the Potato Park, has signed a declaration against transgenics in Peru.
                        </span>

                        <div>
                            <a href="https://www.servindi.org/actualidad/24/06/2020/senor-vizcarra-el-pueblo-peruano-rechaza-los-transgenicos" target="_blank" rel="noopener" >LEER HISTORIA</a>
                        </div>
                    </Card>

                    <Card>
                        <img src={transgenicos} />

                        <h3>Rejecting Transgenics in Peru</h3>

                        <span>
                            Asociación ANDES, along with the Association of the Communities of the Potato Park, has signed a declaration against transgenics in Peru.
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
                    <h1>October 18, 2020</h1>              
                    <p>Open Letter to the President of the Republic of Peru - Extension of moratoratia to production of transgenics</p>
                    <div>
                        <a href="https://andes.org.pe/wp-content/uploads/2020/10/Carta-Abierta-al-Presidente-de-Peru-Ampliacion-de-la-moratoratia-a-transgenicos-18-10-20.pdf" target="_blank" rel="noopener">READ MORE</a>
                    </div>
                </div>

                <div>  
                    <h1>Octubre 20, 2020</h1>              
                    <p>Congress extends moratorium on GM production until 2035.</p>
                    <div>
                        <a href="https://larepublica.pe/economia/2020/10/20/congreso-amplia-moratoria-a-transgenicos-hasta-diciembre-del-2035/?fbclid=IwAR16fczjYrejroXMDUpPQaTJ4pQZ4VP0nSpAGcDRZXbF5KNzdrWSDU9-0FA" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(Politica);