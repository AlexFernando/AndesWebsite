import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {ContainerBlocks, BlockInfo} from './Pasantias';
import {SectionContainer, MainParagraph} from './potatoPark';

// font awesome icons
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconList} from './TerritoriosCulturales'

import curso1 from '../static/images/curso1.jpg'

import curso2 from '../static/images/curso2.jpg'

const SpanStyled = styled.span`
    font-style: italic;
    font-weight: 700;
    margin-right: .5rem;
`;

const Cursos = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Courses
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Formation, learn with us.
                </SubTitle>
                
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    The Yachay Kuychi Pluriversity offers a range of innovative and adaptable programs for indigenous peoples, academics, researchers, policy makers and others. The programs include:                       
                </MainParagraph>
            
            </SectionContainer>

            <ContainerBlocks>
                <BlockInfo>

                    <img src={curso2} />

                    <div>
                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>Participatory Action-research Programs </SpanStyled> on Food Neighborhoodsbiocultural heritage, climate change, traditional agricultural systems, underutilized crops, nutrition, and others, are facilitated by community leaders, indigenous knowledge holders and formally trained scientists.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>Farmer Field Schools</SpanStyled> where farmers are directly engaged in field studies, develop conceptual understanding and specific hands-on skills in agroecology and water management, and other topics of interest identified by participants.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>Contact learning zones </SpanStyled> create safe and collaborative environments where different generations, genders, and cultures come together to learn from one another specific topics</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>The internship and Volunteer Program </SpanStyled> helps to build local and international capacity, establishing alliances and networks as forces for social change.</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>Policy platform development</SpanStyled> is a way to facilitate communication and coordination within complex policy processes and institutions at the local, national, regional and international levels</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/><SpanStyled>Custom and Special Interest Courses</SpanStyled> are offered on-site for general interest and professional development.</li> 
                        </ul>
                    </div>
                    
                </BlockInfo>

                <BlockInfo>

                    <div>
                        <h2>Detalles</h2>
                        <p>
                        Course facilitators are both formally educated professionals and Indigenous knowledge experts. Course ‘toolkits’ for instructors are a dynamic and constantly evolving collection of methods and instruments, open to revision and augmentation. These toolkits are drawn from, and creatively integrate, a variety of sources: pre-Hispanic tools, the methods of participatory action research, and Internet and wireless technologies, among others.
                        </p>

                        <p>
                            Exchanges and courses have previously been organized for Indigenous business leaders from New Zealand, policy makers from Mexico, Potato scientists and policy makers from around the world, and several university groups from Peru, Mexico, Chile, and USA. 
                        </p>
                    </div>
                    

                    <img src={curso1} />
                </BlockInfo>

            </ContainerBlocks>
        </MarginTopContainer>
    );
}
 
export default connect(Cursos);