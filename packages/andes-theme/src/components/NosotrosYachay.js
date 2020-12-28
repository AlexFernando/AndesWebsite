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
                    Educación <br></br>
                    Biocultural
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>


            <SectionContainer>
                <MainParagraph>
                    La Pluriversidad Yachay Kuychi (Arco Iris de Conocimientos) fue establecida por la Asociación ANDES en el Valle Sagrado de los Incas, cerca de Cusco, Perú en 2020. Es una institución internacional de educación e investigación intercultural, y un centro de excelencia en sistemas alimentarios indígenas y Paisajes bioculturales. Creemos que la educación puede cambiar el mundo.                
                </MainParagraph>
                
                <p>
                    La Pluriversidad Yachay Kuychi reconoce el colonialismo tanto histórico como en curso, y busca una mayor justicia en el sistema alimentario mundial, adoptando un enfoque descolonizador y emancipador. La Pluriversidad se basa en la interrelación fundamental de tierras, idiomas y pueblos, y trasciende las divisiones disciplinarias comunes. Este es un modelo de educación horizontal, descolonizante, transdisciplinario y biocultural.
                </p> 

                <FixedCard>
                    
                    <img src={transgenicos}/>

                    <SectionText>
                        <div>
                            <h1>Latin American School for Food Systems Resilience (ALLSA)</h1>

                            <p>
                            En septiembre de 2019, ALLSA trabajó en coordinación con la Pluriversidad Yachay Kuychi para realizar un intercambio de aprendizaje en Cusco Perú.
                            </p>
                            <div>
                                <a href="https://www.globalenvironments.org/latin-american-school-for-food-systems-resilience/ " target="_blank" rel="noopener" >LEER HISTORIA</a>
                            </div>
                        </div>
                    </SectionText>
                </FixedCard>
            </SectionContainer>

            <h2 css= {css`text-align: center; color: #44841a; font-size: 2rem;`} >EDUCACION BIOCULTURAL</h2>

            <BriefSection>

                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faLightbulb}/>
                    <h3>OBJETIVO</h3>
                    <p>
                    La Pluriversidad tiene como objetivo abordar los desafíos globales contemporáneos y futuros a través de la incorporación de formas indígenas de conocimiento y acción en la toma de decisiones, políticas y prácticas de agrobiodiversidad y uso de la tierra 
                    </p>
                
                </InfoItem>
                <VerticalBorder></VerticalBorder>
                
                <InfoItem>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>PRINCIPIOS</h3>

                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Cosmovisión, conocimiento y prácticas indígenas</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Justicia social y ambiental</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Teoría Feminista</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Ecología política</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Economía solidaria</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Desarrollo curricular participativo</li> 
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Enfoques de alfabetización múltiple</li> 
                    </ul>

                </InfoItem>
                <VerticalBorder></VerticalBorder>
                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faPeopleCarry}/>
                    <h3>IMPACTO</h3>
                    <p>
                    A nivel local, apoyará la innovación en las comunidades «food neighborhoods» a medida que diversifican sus economías, promulgan la soberanía alimentaria, desarrollan la resiliencia de sus sistemas terrestres y hídricos, y perseguir sus objetivos de sostenibilidad.
                    </p>
                
                </InfoItem>
            </BriefSection>

            <SubSection>
                <TextContainer>
                    <h2>Equipo de Programa</h2>

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
                    <h2>Facilitadores</h2>

                        <br></br> 
                        <h3>Mariano Sutta Apocusi <span> - Parque de la Papa</span></h3> 
                        <br></br> 
                     
                        <h3>Aniceto Ccoyo Ccoyo <span>  - Parque de la Papa</span></h3> 
                        <br></br> 
                   
                        <h3>Ricardino Paco Condori <span>  - Parque de la Papa</span></h3>  
                        <br></br> 

                        <h3>Ricardo Pacco<span>  -  Asociación ANDES</span></h3>  
                        <br></br> 
                   
                        <h3>Sonia Ttito Quispe <span>  - Parque Chalakuy</span></h3>  
                        <br></br> 
                   
                        <h3>Victor Oblitas <span> <br></br> - Parque Chalakuy</span></h3>  
                   
                        
                </TextContainer>

                <ImageSection src = {potatoPark} />
                
            </SubSection>
        </MarginTopContainer>


    );
}
 
export default connect(NosotrosYachay);