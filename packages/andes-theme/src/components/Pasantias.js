import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, MainParagraph} from './potatoPark';
import pasantia1 from '../static/images/pasantia1.jpg'
import pasantia2 from '../static/images/pasantia2.jpg'
import pasantia3 from '../static/images/pasantia3.jpg'
import pasantia4 from '../static/images/pasantia4.jpeg'
import pasantia5 from '../static/images/pasantia5.jpg'

// font awesome icons

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconList} from './TerritoriosCulturales'

export const ContainerBlocks = styled.div`
 
`;

export const BlockInfo = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    margin: 2rem 5rem;
    padding: 2rem 4rem;
    border-radius: 1rem;

    :nth-of-type(odd){
        background-color: #336313;
    }
    
    :nth-of-type(even){
        background-color: #333333;
    }

    img {
        flex-basis: 30%;
        object-fit: contain;
        width: 240px;
        height: 320px;

        @media(max-width: 768px) {
                width: 100%;
                height: 100%;
                margin: 1rem 0;
            
        }
    }

    div {

        flex-basis: 60%;
        h2 {
            color: #fff;
        }

        p {
            color: #fff;
        }

        ul {
            padding-left: 0;
            text-align: left;
        }

        li {
            list-style: none;
            margin-top: 1rem;
        }
    }


    @media(max-width: 768px) {

        flex-direction: column;
        margin: 1rem 0;
        padding: 2rem;
    }

`;

const Pasantias = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Internships
                </Title>
                <SubTitle>
                    Volunteering <br></br> Learn with us
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    Asociación ANDES is guided by a mission of creating local capacities and strategic responses to confront the socioeconomic,
                    cultural, ecological, and political effects of global changes on indigenous peoples and local communities. We aim to protect
                    and promote the biocultural heritage of indigenous peoples and the traditional resource rights associated with them. ANDES 
                    envisions human well-being in sustainable indigenous communities, based on the respect for human rights, cultural diversity, and participatory democracy.
                </MainParagraph>
                <p>
                    ANDES’s work with the communities of the Parque de la Papa [Potato Park] has 
                    helped to create global momentum behind the creation and protection of biocultural heritage territories and Food 
                    Neighborhoods, safeguarding the agrobiodiversity and cultural resources of indigenous peoples around the world. ANDES also
                    focuses on epistemological diversity and innovative education for indigenous and non-indigenous peoples alike, currently
                    being developed through the Yachay Kuychi Pluriversity, an education initiative which aims to create holistic approaches to
                    learning and collaborations between western science and indigenous knowledge.
                </p>

                <p>
                    Finally, ANDES acts as the Secretariat for the International Network of Mountain Indigenous Peoples (INMIP), working to connect communities from around the
                    world to confront the urgent and intersecting challenges of climate change, food security, and human rights.
                </p>
            </SectionContainer>

            <ContainerBlocks>
                <BlockInfo>

                    <img src={pasantia1}/>

                    <div>
                        <h2>
                            VOLUNTEER ROLES
                        </h2>

                        <p>
                            ANDES, INMIP, and the Yachay Kuychi Pluriversity depend on the support of passionate and committed
                            staff and volunteers to achieve their mission. Volunteers can support the ongoing work of these
                            organizations in a variety of ways, including::
                        </p>
                        <p>
                            Event volunteers: short term volunteer roles designed to support a specific event.
                        </p>
                        
                        <p>
                            Organization volunteers: roles typically lasting 3-6 months during which the volunteer supports the day-
                            to-day operations of the organization .
                        </p>

                        <p>
                            Communications volunteers: roles typically lasting 3-6 months during which the volunteer supports the
                            communications and outreach of the organization, including social media, materials for publication, and
                            web maintenance and design.
                        </p>
                    </div>
                    
                </BlockInfo>

                <BlockInfo>

                    <div>
                        <h2>INTERSHIPS</h2>
                        
                        <p> 
                        For individuals hoping to develop independent research projects while gaining professional skills,
                        ANDES offers internship opportunities. Interns should be currently enrolled in an accredited university
                        program at the undergraduate or graduate level, and should develop a research proposal related to
                        the key themes and projects of ANDES, INMIP, and/or the Pluriversity. Those completing research must
                        fulfill an obligation to work in collaboration with indigenous communities, obtaining consent at all
                        steps of the process and actively sharing their results with partner communities.
                        </p>
                    </div>

                    <img src={pasantia2} />
                </BlockInfo>

                <BlockInfo>

                    <img src={pasantia3} />

                    <div>
                        <h3>A PLACEMENT WITH ANDES OFFERS AN AMAZING OPPORTUNITY FOR STUDENTS AND PROFESSIONALS OF ALL LEVELS TO:</h3>
                        
                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Work closely with Indigenous Communities</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Engage in innovative and creative research</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Work from a holistic and transdisciplinary approach</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Receive professional and academic formation in the context of a small, indigenous-run NGO</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Improve Spanish and/or Quechua language skills</li> 
                        </ul>
                    </div>
                </BlockInfo>

                
                <BlockInfo>
                    <div>                        
                        <h3>DESIRED QUALIFICATIONS</h3>
                        
                        <p>
                            We have a strong preference for volunteers who speak fluent Spanish and English; candidates must at
                            least manage Spanish at a basic level.
                        </p>

                        <p>
                            It is essential that volunteers have strong written and verbal communication skills.
                        </p>
                
                        <p>
                            Applicants should have demonstrated interest in the areas in which ANDES, INMIP, and the Pluriversity work.
                        </p>

                        <p>
                            Applicants should be self-motivated and must be comfortable working both independently and as part of a team.
                        </p>
                    </div>

                    <img src={pasantia4} />
                    
                </BlockInfo>

                <BlockInfo>
                    <img src={pasantia5} />

                    <div>
                        <span>“Volunteering for ANDES was such an amazing experience,</span>
                        <p>
                            I would
                            definitely encourage anyone with an interest in biodiversity and Indigenous
                            rights to apply! An internship with ANDES goes beyond voluntourism—it is a
                            real profesional opportunity to work with an NGO and local communities.
                        </p>

                        <p>
                            It was an immersive and eye opening experience which gave me a deeper understaning of responsible and reciprocal collaboration with indigenous groups.”
                        </p>
                        
                        <strong>- Jessica, Former ANDES Volunteer Researcher</strong>
                    </div>
                </BlockInfo>

                <BlockInfo>
                    <p>
                        To apply for a volunteer or internship role with ANDES, INMIP, or the Pluriversity,
                        please send an up-to-date CV and a statement of interest to Tammy Stenner at:
                        tammy@andes.org.pe
                    </p>
                </BlockInfo>

            </ContainerBlocks>
                    </MarginTopContainer>
    );
}
 
export default connect(Pasantias);