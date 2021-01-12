import React from 'react';
import {connect, css} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card , MainParagraph} from './potatoPark';
import {SectionText} from './HomePage';
import {FixedCard} from './Politica';
import {SubSection, TextContainer, ImageSection} from './Stuff';
import {BriefSection, InfoItem, FontAwesomeIconList, FontAwesomeIconStyled } from './TerritoriosCulturales'
import { VerticalBorder } from './Dropdown';
import { faLightbulb, faListAlt, faArrowAltCircleRight, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

import imgResearch from '../static/images/homenews.jpeg';
import transgenicos from '../static/images/transgenicos.jpg';
import potatoPark from '../static/images/link4.jpeg';

const NosotrosYachay = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Yachay Kuychi
                </Title>
                <SubTitle>
                    Biocultural<br></br>
                    Education
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>


            <SectionContainer>
                <MainParagraph>
                    The Yachay Kuychi (Rainbow of Knowledges) Pluriversity was established by Association ANDES in the Sacred Valley of the Incas, near Cusco, Peru in 2020. It is an international, intercultural education and research institution, and a center of excellence on indigenous food systems and biocultural landscapes.  We believe that education can change the world.                
                </MainParagraph>
                
                <p>
                    The Yachay Kuychi Pluriversity acknowledges historical and ongoing colonialism, and seeks greater justice in the global food system by taking a decolonizing and emancipatory approach. The Pluriversity is grounded in the fundamental interrelationship of lands, languages, and peoples, and transcends common disciplinary divisions. This is a horizontal, decolonizing, transdisciplinary, and biocultural model of education.
                </p> 

                <FixedCard>
                    
                    <img src={transgenicos}/>

                    <SectionText>
                        <div>
                            <h1>Latin American School for Food Systems Resilience (ALLSA)</h1>

                            <p>
                                In September 2019, ALLSA worked in coordination with the Yachay Kuychi Pluriversity to host a learning exchange in Cusco Peru
                            </p>
                            <div>
                                <a href="https://www.globalenvironments.org/latin-american-school-for-food-systems-resilience/ " target="_blank" rel="noopener" >READ HISTORY</a>
                            </div>
                        </div>
                    </SectionText>
                </FixedCard>
            </SectionContainer>

            <h2 css= {css`text-align: center; color: #44841a; font-size: 2rem;`} >BIOCULTURAL EDUCATION</h2>

            <BriefSection>

                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faLightbulb}/>
                    <h3>OBJECTIVE</h3>
                    <p>
                        The Pluriversity aims to address contemporary and future global challenges through the incorporation of Indigenous ways of knowing and doing in agrobiodiversity and land use decision-making, policy, and practice.
                    </p>
                
                </InfoItem>
                <VerticalBorder></VerticalBorder>
                
                <InfoItem>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>PRINCIPLES</h3>

                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Indigenous world view, knowledge and practices</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Social and Environmental justice</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Feminist Theory</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Political-Ecology</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Solidarity Economy</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Participatory Curriculum Development</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Multiple Literacies Approaches</li> 
                    </ul>

                </InfoItem>
                <VerticalBorder></VerticalBorder>
                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faPeopleCarry}/>
                    <h3>IMPACT</h3>
                    <p>
                        At the local level, it will support innovation in food crop neighborhood communities as they diversify their economies, enact food sovereignty, build resilience of their terrestrial and water systems; and pursue their sustainability goals.
                    </p>
                
                </InfoItem>
            </BriefSection>

            <SubSection>
                <TextContainer>
                    <h2>Program Team</h2>

                        <br></br> 
                        <h3>Tammy Stenner<br></br><span> - Asociación ANDES</span></h3> 
                        <br></br> 

                        <h3>Alejandro Arguemdo<span> <br></br> - Swift Foundation</span></h3> 
                        <br></br>

                        <h3>Michel Pimbert<span> <br></br> - Coventry University, Centre for Agroecology, Water and Resilience</span></h3>  
               
                </TextContainer>
                <ImageSection src = {imgResearch} />
                
            </SubSection>

            <SubSection>
                <TextContainer>
                    <h2>Facilitators</h2>

                        <br></br> 
                        <h3>Mariano Sutta Apocusi <span> - Potato Park</span></h3> 
                        <br></br> 
                     
                        <h3>Aniceto Ccoyo Ccoyo <span>  - Potato Park</span></h3> 
                        <br></br> 
                   
                        <h3>Ricardino Paco Condori <span>  - Potato Park</span></h3>  
                        <br></br> 

                        <h3>Ricardo Pacco<span>  -  Asociación ANDES</span></h3>  
                        <br></br> 
                   
                        <h3>Sonia Ttito Quispe <span>  - Chalakuy Park</span></h3>  
                        <br></br> 
                   
                        <h3>Victor Oblitas <span> <br></br> - Chalakuy Park</span></h3>  
                   
                        
                </TextContainer>

                <ImageSection src = {potatoPark} />
                
            </SubSection>
        </MarginTopContainer>


    );
}
 
export default connect(NosotrosYachay);