import React from 'react';
import {connect, css, styled } from "frontity";
import missionImg from '../static/images/mision.jpeg';
import visionImg from '../static/images/vision.jpeg';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIconList} from './TerritoriosCulturales';


export const MarginTopContainer = styled.div`
    margin-top: 12vh;

    @media(min-width: 768px) {
        margin-top: 16vh;
    }
`;

export const Title = styled.h2`

    font-size: 2.2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
    margin: 2rem 0 2rem 0;
    text-transform: uppercase;
 
    @media(min-width: 768px) {
        font-size: 4rem;
    }
`
export const SubTitle = styled.span`
    font-size: 1.5rem;

    @media(min-width: 768px) {
        font-size: 2.5rem;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    }
`
export const Separator = styled.span`
    display: block;
    width: 12rem;
    height: 12px;
    margin-top: .5rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    background-color: #44841a;

    @media(max-width: 768px) {
        width: 6rem;
        height: 8px;
    }
`
export const HeadContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
    padding: 2rem;
    overflow-wrap: break-word;
`;


export const SectionContainer = styled.div`
    display: -webkit-box;  
    display: -ms-flexbox;
    display: flex;
   
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
       -ms-flex-direction: column;
           flex-direction: column;

    padding: 2rem;

    span {
        font-weight: bold;
        font-size: 1.3rem;
    }

    p {
        @media (min-width: 768px){
            width: 70%;
        }
       
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.4rem;
        margin: 2rem 0 0 0;
    }
`;

const ObjetivesContent = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }


    div {
        padding: 0rem 1rem;

        img {
            @media (max-width: 768px){
                max-width: 100%;
                max-height: 100%;
            }
            max-width: 80%;
            max-height: 80%;
            align-self: center;
        }

        ul {
            padding: 0;
        }

        li {
            list-style: none;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
    }
`
export const ImageStyle = styled.img`
    
    max-height: 100%; 
    max-width: 100%;

       
    @media (min-width: 768px){
        max-width: 50%;
        max-height: 50%;
    }
`

const Filosofia = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>ABOUT</Title>
                <Separator></Separator>
             
                <SubTitle>Safeguarding the Biocultural Territories</SubTitle>       
            </HeadContainer>

            <SectionContainer>

                    <div>
                        <p><span>Our Mission : </span>Promote a conservation and sustainable development approach
                        based on the Andean principle of Sumaq Kawsay through the implementation 
                        of Biocultural Territories.</p>  
                       
                        
                        <p><span>Our Vision : </span>Create local capacities and strategic responses to the 
                        socio-economic, cultural, ecological and political effects of the globalization process 
                        on local communities, as well as the protection of their resources, knowledge and the rights associated with these resources.</p>
                    </div>
        
                    <div>
                    <h3>Our Objectives: </h3>                    
                        <ObjetivesContent>
                            <div>
                                <ul>
                                    <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Defense, promotion and celebration of biocultural <br></br>diversity</li>
                                    <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Sustainable community development</li>
                      
                                </ul>

                                <img src={missionImg} />
                            </div>                       
                       

                            <div>
                                <ul>
                                    <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Innovation to face climate change</li>
                                    <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Political advocacy for indigenous rights</li>
                                    <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Creation of solidarity networks</li>          
                                </ul>
                                <img src={visionImg} />
                            </div>
                        </ObjetivesContent>
                    </div>
            </SectionContainer>
            
        </MarginTopContainer>

    );
}
 
export default connect(Filosofia);