import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import imgPluriculturalidad from '../static/images/link3.jpg';
import imgResearch from '../static//images/link2.jpg';
import imgNoticias from '../static/images/link4.jpeg';

export const SubSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
    :nth-of-type(odd) {
        background-color: #fff;   
    }
    :nth-of-type(even) {
        background-color: #f4f4f4;   
    } 

    @media (min-width: 768px){
        flex-direction: row;
        padding: 5rem;

        :nth-of-type(odd) {
            flex-direction: row-reverse;
        }
    }
`;

export const TextContainer = styled.div`

    display: flex;
    flex-direction: column;

    h3 {
        margin: 0 0 .5rem 0;
    }

    span {
        color: #44841a;
        font-size: 1.1rem;
    }

    p {
        margin: 0 0 1.5rem 0;
    }

    @media (min-width: 768px){
        margin: 0 2rem 0 2rem;
    } 
`;

export const ImageSection = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    margin-top: 1rem;

    @media (min-width: 768px){
        width: 45%;
        height: 100%;
        border-radius: 10rem;
        margin: 0 2rem 0 2rem;
    } 
`;

const Staff = ({state}) => {

    return ( 
        
        <MarginTopContainer>
            <HeadContainer>
                <Title>Our Staff</Title>
                    <SubTitle>Hard work &amp; Vision <br></br> Commitment <br></br>Experience</SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SubSection>
                <TextContainer>
                    <h2>Management</h2>
                    
                        <h3>Cesar Argumedo <br></br><span> - Administrative Director</span></h3> 
                        <p>Cesar is one of the founders of ANDES. Previously, he worked in research and development programs with the Swiss Government and Cultural Survival cooperation. He has a degree in Zootechnical Engineering awarded by the National University San Antonio Abad of Cusco.</p>    

                        <h3>Alejandro Argumedo <span> <br></br> -  Director of Programs</span></h3> 
                        <p>Alejandro is one of the founders of ANDES and founder and coordinator of the Indigenous Peoples Biocultural Climate Change Assessment Initiative (IPCCA). He collaborates with various networks of indigenous communities that promote biodiversity and the sustainable management of natural resources.</p>

                        <h3>Tammy Stenner <span> <br></br> - Managing Director</span></h3>  
                        <p>Tammy is the managing director at ANDES. She has worked in research, project coordination, and administrative support since 1995. She also works in adult education and international development studies in Canada.</p>
                    
                </TextContainer>

                <ImageSection src = {imgPluriculturalidad} />
                
            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Administración</h2>
                    
                        <h3>Carolina Ichillumpa <br></br><span> -  General Administrator</span></h3> 
                        <p>Carolina is an accountant by profession and occupation with 18 years experience working in non-governmental and non-profit organizations. She holds the position of Accountant and Administrator at ANDES.</p>    

                        <h3>Ruth Zuloaga<span> <br></br> - Accountant</span></h3> 
                        <p>Ruth was born in the Province of Quispicanchis in Cusco. She has worked with ANDES since 2008.  </p>

                        <h3>Ysabell Morón<span> <br></br> - Assistant to the administration     </span></h3>  
                        <p>Ysabell was born in Arequipa. She has worked as a financial assistant at ANDES since 2013. </p>

                        <h3>Jhon Edison Ccoyo Ccana<span> <br></br> - Administrator of the Potato Park </span></h3>  
                        <p>Jhon was born in the community of Amaru in the Potato Park. He has worked with ANDES since 2018. </p>                        
                
                </TextContainer>

                <ImageSection src = {imgResearch} />

            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Support Services</h2>
                    
                        <h3>Arascely Heredia<br></br><span> - Specialist in communications technology</span></h3> 
                        <p>Arascely has worked with ANDES for 18 years as a communications specialist. She studied Computation at the Instituto Tecnológico KHIPU and systems engineering at the Universidad Andina del Cusco. </p>    

                        <h3>Kike Granados, Coordinador Logístico <span> <br></br> -  Logistics coordinator and audiovisual technician</span></h3> 
                        <p>Kike has worked with ANDES for 18 years in the areas of logistics, film-making, and editting of digital media. Currently, Kike is studying geographic information systems (GIS) and environmental engineering with the goal of contributing to research about climate change and sustainable development of natural resources. </p>
                </TextContainer>

                <ImageSection src = {imgResearch} />

            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Program Staff </h2>
                    
                        <h3>Jessica Villacorta Villacorta<br></br><span> - Agronomist</span></h3> 
                        <p>Jessica graduated from the Universidad Nacional San Antonio Abad de Cusco as an agronomist. She began working with ANDES in March of 2015 on the Smallholder Innovation for Resilience (SIFOR) project, which focused on cilmate change research, native potato conservation, and participatory plant breeding in farmer field schools. Jessica supports all field activities related to crop conservation. </p>    

                        <h3>Oscar Ramos<span> <br></br> - Agronomist</span></h3> 
                        <p>Oscar se graduó como ingeniero agrónomo de la Universidad Nacional de San Antonio Abad del Cusco. Inició su trabajo en ANDES en marzo 2015 en los proyectos de SD=HS y de SIFOR. Trabaja en el plan de conservación de papa y del mejoramiento participativo de maíz y papas en Lares.</p>

                        <h3>Ricardo Pacco Chipa<br></br><span> - Local Coordinator</span></h3> 
                        <p>Ricardo is a leader from the Quechua community of Paru Paru, one of the communities that makes up the Potato Park. He began working with ANDES in 2002 as a local expert in his community and has been an active participant in indigenous networks. Currently, he works as the coordinator for the Parque Chalakuy in Lares, supporting the implementation of all field activities and acting as the main point of contact between the communities and ANDES.</p>    

                        <h3>Cass Madden<span> <br></br> - Researcher and Coordinator, INMIP </span></h3> 
                        <p>Cass graduated from The School for International Training (SIT) with an M.A. in Climate Change and Global Sustainability. She works in the area of research related to Food Neighborhoods with the goal of creating scalable models for biocultural conservation based on the Potato Park and the Parque Chalakuy. She also acts as the coordinator for the International Network of Mountain Indigenous Peoples (INMIP). </p>

                        <h3>Hannah Argumedo Stenner<span> <br></br> - Field project assistant</span></h3> 
                        <p>Hannah graduated from Ryerson University in Canada with a degree in social work. She supports the ANDES team in the implementation of projects in the Potato Park and in Lares. </p>
                </TextContainer>

                <ImageSection src = {imgNoticias} />

            </SubSection>


        </MarginTopContainer>
 );
}
 
export default connect(Staff);
