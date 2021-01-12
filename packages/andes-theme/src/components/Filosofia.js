import React from 'react';
import {connect, css, styled } from "frontity";
import missionImg from '../static/images/mision.jpeg';
import visionImg from '../static/images/vision.jpeg';


export const MarginTopContainer = styled.div`
    margin-top: 14vh;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 2;
 
    @media(min-width: 768px) {
        font-size: 2.5rem;
    }
`
export const SubTitle = styled.h2`

    font-size: 2.2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
    margin: 2rem 0 2rem 0;
 
    @media(min-width: 768px) {
        font-size: 5rem;
        flex-wrap: nowrap;
    }
`

export const Separator = styled.span`
    display: block;
    width: 12rem;
    height: 12px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    background-color: #44841a;
`
export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    overflow-wrap: break-word;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;

    :nth-of-type(even) {
        background-color: #f4f4f4;   
    }
    :nth-of-type(odd) {
        background-color: #fff;   
    } 
`;

export const SubSectionContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding: 2rem;
    
    @media (min-width: 768px){
        flex-direction: row;
        padding: 0;

        :nth-of-type(even) {
            flex-direction: row-reverse;
        }

        div {
            padding: 0 3rem 0 3rem;
        }
    }

    h3 {
        text-align: center;
        margin-top: 3rem;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
`;


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
                <SubTitle>Our Mission<br></br> Vision &amp; Goals</SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <SubSectionContainer>
                    <div>
                        <h3>Our Mission</h3>
                        <p>Our mission is to promote a rights-based approach to conservation and development through the implementation of Biocultural Territories, a model that has been successfully implemented in the Potato Park.  
                        <br></br>This model creatively links the ancient Andean principle and philosophy of well-being, Sumaq Kawsay, to modern science and research methodologies to promote resilient agrarian systems for biodiversity. Furthermore, we promote endogenous development and poverty reduction. This work is carried out in indigenous communities established in the Peruvian Andes based on their own capacities and resources through local development strategies.</p>

                        <h3>Our Vision</h3>
                        <p>Our vision is to create local capacities and strategic responses to the socio-economic, cultural, ecological and political effects of the globalization process on local communities, as well as the protection of their resources, knowledge and the rights associated with these resources.</p>
                    </div>
                
                    <ImageStyle src={visionImg} />
                </SubSectionContainer>

                <SubSectionContainer>
                    <div>
                        <h3>Our Objectives</h3>
                        <ul>
                            <li>The search for Sumaq Kawsay in all its dimensions through the defense, promotion, and celebration of diversity in its different social, natural, biocultural, and spiritual manifestations in terms of ideas, knowledge, and other forms of self-expression.</li>
                            <br></br><li>The establishment and dissemination at the global level of innovative models for sustainable development of territories and communities  which are capable of solving the environmental, social, and cultural challenges that rural communities face.</li>
                            <br></br><li>The generation of regional, national, and international policies that privilege local and marginalized voices in promoting biocultural conservation and in areas related to sustainable development.</li>
                            <br></br><li>The creation of a global solidarity movement of organizations, actors, and local communities, linked through South-South and South-North networks of cooperation and collective discovery, to develop alternatives and creative responses to global challenges.</li>
                        </ul>
                    </div>

                    <ImageStyle src={missionImg} />
                </SubSectionContainer>
            </SectionContainer>
            
        </MarginTopContainer>

    );
}
 
export default connect(Filosofia);