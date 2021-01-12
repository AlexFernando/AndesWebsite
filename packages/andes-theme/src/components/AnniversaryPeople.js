import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionText} from './HomePage';
import {TextContainer} from './Stuff';
import groupAndes from '../static/images/FotogrupalANDESytecnicosscaled.jpg';
import groupLares from '../static/images/FotogrupalLarescaled.jpg';
import Krystyna from '../static/images/Krystynascaled.jpeg';


export const SectionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 0 0;
    background-color: #eaeaea;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const AnniversayPeople = ({state}) => {
    return ( 

        <MarginTopContainer>
            <HeadContainer>
                <Title>
                 25 People Clave
                </Title>
                <SubTitle>
                    Celebrating<br></br> the 25th Anniversary
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionText>
            <div>  
                <h1>ANDES Celebrates 25 Years</h1>              
                <p> As part of our 25th anniversary celebrations, ANDES would like to thank 
                    everyone who has contributed to institutional development, collaborative research 
                    and knowledge sharing. We appreciate the encouragement of partners along the way 
                    and look forward to continuing our partnerships as we move forward with the 
                    implementation of Yachay Kuychi Pluriversity. There are too many people to name here, 
                    but we have chosen to highlight 25 influencers from ANDES's 25-year history.
                </p>
            </div>
            </SectionText>

            <SectionText>
                <div>
                    <h1>Meet the co-founders of ANDES</h1>
                    <p>
                        Alejandro Argumedo and Cesar Argumedo grew up in the center of the Andes in Peru with their 4
                        brothers. After high school, Alejandro studied agronomy at McGill University in
                        Montreal, Canada, and Cesar studied zootechnology at the San Antonio Abad University of Cusco,
                        Peru.
                    </p>

                    <p>
                        In 1995, Alejandro and Cesar registered the Association for Nature and Development
                        Sustainable (ANDES) in Cusco. During the first years, the organization operated with funds
                        very limited and understaffed. However, during this period important
                        relationships that led to the establishment of the iconic Potato Park by 6 communities
                        indigenous people with the ANDES guide. This work continues to provide important lessons and
                        a model for most of the current work in organizations.
                    </p>
                    <h3>Alejandro Argumedo</h3> 
                        <p>
                            He recently left his position as Director at ANDES to occupy
                            a position at the Swift Foundation. Continue to provide leadership to ANDES as a member
                            of the Board of Directors.
                        </p>

                    <h3>Cesar Argumedo</h3> 
                        <p>He continues to work as Director of ANDES</p>    
                    
                </div>
                
            </SectionText>


            <SectionImage>
                <SectionText>
                    <div>
                        <h1>ANDES's management team also includes two long-time associates.</h1>
                        
                        <h3>Tammy Stenner</h3> 
                            <p>He has played a support role for ANDES directors since
                            the beginning. She is also the coordinator of the Yachay Kuychi 
                            Pluriversity Program.</p>

                        <h3>Carolina Ichillumpa</h3> 
                            <p>She joined ANDES in 2002 as an accountant. She is the Head of
                                Administration and finance..</p>    
                        
                    </div>
                    
                </SectionText>

                <Images src={groupAndes} />
            </SectionImage>
            
            <SectionText>
                <div>
                    <h1>
                        ANDES 'careful and transparent management of finances and assets infuses
                        trust in partners. This important work is currently supported by
                    </h1>

                        <TextContainer>
                            <h3>Ruth Zuloaga<span> - Accountant</span></h3> 
                            <h3>Ysabel Moron <span> - Office Assistant</span></h3> 
                            <h3>Arascelly Heredia<span> - TIC Specialist</span></h3> 
                            <h3>Enrque Granados<span> - Logistics manager</span></h3> 
                        </TextContainer>
                </div>
            </SectionText>

            <SectionImage>
                <SectionText>

                    <div>
                        <h1>
                            ANDES focuses on research with and for indigenous communities. Our staff
                            field includes experts with university education and knowledge holders
                            traditional, who bring diverse perspectives and experiences to complex problems.
                            These experts currently include:</h1>

                            <TextContainer>
                                <h3>Jessica Villacorta<span> - Agronomist</span></h3> 
                                <h3>Ricardo Pacco Chipa<span> - Field coordinator</span></h3> 
                                <h3>Mariano Sutta Apocusi<span> - Local expert</span></h3> 
                                <h3>Lino Manani Huarka<span> - Potato Guardian</span></h3> 
                                <h3>Aniceto Ccoyo Ccoyo<span> - Local expert</span></h3> 
                                <h3>Victor Oblitas<span> - Local expert </span></h3> 
                                <h3>Cass Madden<span> -  Researcher</span></h3> 
                            </TextContainer>
                    </div>
                </SectionText>

                <Images src={groupLares}/>
            </SectionImage>

            <SectionText>

                <div>
                    <h1>The Board of Directors has international representation, with well-qualified people and
                        experienced professionals who provide invaluable guidance and support to ANDES.</h1>

                        <TextContainer>
                            <h3>Carlos Loret de Mola<span> - President of the Cusichaca Association, former Minister of the Environment in Peru.</span></h3> 
                            <h3>Carlos Amat y Leon<span> - Professor at the Universidad del Pacífico, former Minister of Agriculture, Peru.</span></h3> 
                            <h3>Michel Pimbert<span> - Professor at Coventry University, Executive Director of the Center for Agroecology, Water and Resilience</span></h3> 
                            <h3>Yiching Song,<span> - Principal Investigator, China Center for Agricultural Policy (CCAP), Professor, China Agricultural University</span></h3> 
                        </TextContainer>
                </div>
            </SectionText>
            
            <SectionImage>
                <SectionText>

                    <div>
                        <h1>
                            ANDES has the contributions of an incredible international network of partners for the
                            financial and technical support. Some examples are:
                        </h1>

                            <TextContainer>
                                <h3>Krystyna Swiderska<p> - Principal Investigator of Agriculture and Agrobiodiversity at the
                                International Institute for Environment and Development (IIED), is a
                                ANDES collaborator for a long time, supporting the collection of
                                funds, collaborative research and publications.</p></h3> 
                                                            <h3>Sonja Swift<p> - And the Swift Foundation have provided valuable support to ANDES for the
                                institutional development, action research and policy development, and have
                                generously contributed to the establishment of the new Pluriversity site in the
                                Sacred Valley.</p></h3> 
                                                            <h3>Gigi Manicad<p> - Provided professional and thoughtful technical and financial support to ANDES
                                during his time at Oxfam-Novib, and we look forward to continuing our collaboration with
                                through Pluriversity.</p></h3> 
                                
                            </TextContainer>
                    </div>
                </SectionText>

                <Images src={Krystyna} />
            </SectionImage>
            
            <SectionText>
                <div>
                    <h1>With an active Internship and Volunteer Program, ANDES welcomes
                    students from around the world, who conduct research on various topics,
                    including social and environmental justice, indigenous food systems, conservation of
                    biodiversity and ecotourism.</h1>

                    <TextContainer>
                        <h3>Neus Marti<p> - (Spain) carried out a postgraduate research on the Markets of
                            Trueque de Lares and has done various consultancies with ANDES. Will participate
                            actively in the development of programming at Yachay Kuychi Pluriversity.</p></h3> 
                        <h3>Ewen Dano <p> - (France) recently completed a postgraduate research on
                            underutilized crops in the Lares valley.</p></h3> 
                        <h3>Melissa Loza<p> - (USA) She came as a volunteer on her summer vacation during the
                            college.</p></h3> 
                        
                    </TextContainer>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(AnniversayPeople);