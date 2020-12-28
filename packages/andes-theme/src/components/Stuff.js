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
                <Title>Nuestro Personal</Title>
                    <SubTitle>Hard work & Vision <br></br> Commitment <br></br>Experience</SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SubSection>
                <TextContainer>
                    <h2>Dirección Ejecutiva</h2>
                    
                        <h3>Cesar Argumedo <br></br><span> - Director Administrativo</span></h3> 
                        <p>Cesar es uno de los fundadores de ANDES. Anteriormente, ha trabajado en programas de investigación y desarrollo con la cooperación Suiza y Cultural Survival. Tiene el título de Ingeniero Zootecnista otorgado por la Universidad Nacional San Antonio Abad de Cusco.</p>    

                        <h3>Alejandro Argumedo <span> <br></br> - Director de Programas</span></h3> 
                        <p>Alejandro es uno de los fundadores de ANDES y fundador y coordinador de Indigenous Peoples Biocultural Climate Change Assessment Initiative (IPCCA). Colabora con varios redes de comunidades indígenas que promueven la biodiversidad y el manejo sostenible de los recursos naturales.</p>

                        <h3>Tammy Stenner <span> <br></br> - Asistente Ejecutiva</span></h3>  
                        <p>Tammy es Asistente Ejecutiva en ANDES. Ha trabajado en investigaciones, coordinación de proyectos y apoyo administrativo desde 1995. También trabaja en la educación adulta y los estudios de desarrollo internacional en Canadá.</p>
                    
                </TextContainer>

                <ImageSection src = {imgPluriculturalidad} />
                
            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Administración</h2>
                    
                        <h3>Carolina Ichillumpa <br></br><span> - Administradora General</span></h3> 
                        <p>Carolina es contadora de profesión y ocupación con experiencia de 18 años de trabajo en organismos no gubernamentales y organismos sin fines de lucro. Desempeña el cargo de Contadora y Administradora en la Asociación ANDES.</p>    

                        <h3>Ruth Zuloaga<span> <br></br> - Contadora</span></h3> 
                        <p>Ruth nació en la Provincia de Quispicanchis, departamento de Cusco. Trabaja con ANDES desde 2008.</p>

                        <h3>Ysabell Morón<span> <br></br> - Asistente Contable y Administrativo</span></h3>  
                        <p>Ysabell nació en Arequipa. Desde enero 2013 está trabajando con ANDES como Asistente Contable.</p>

                        <h3>Jhon Edison Ccoyo Ccana<span> <br></br> - Administrador del Parque de la Papa</span></h3>  
                        <p>Jhon nació en la comunidad de Amaru, Parque de la Papa. Trabaja con ANDES desde 2018.</p>                        
                
                </TextContainer>

                <ImageSection src = {imgResearch} />

            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Servicios de Apoyo Básico</h2>
                    
                        <h3>Arascely Heredia<br></br><span> - Especialista en Comunicaciones Tecnológicas</span></h3> 
                        <p>Arascely tiene 18 años de trabajando con ANDES como especialista en comunicaciones tecnológicas. Estudió en el Instituto Tecnológico KHIPU, Computación e Informática e Ingeniería de Sistemas en la Universidad Andina del Cusco. Actualmente trabaja en área de Comunicaciones Administrando Redes y Sistemas de información.</p>    

                        <h3>Kike Granados, Coordinador Logístico <span> <br></br> - Coordinador Técnico Audiovisual Audiovisual</span></h3> 
                        <p>Kike tiene 18 años trabajando con ANDES en los temas de logística, filmación, y edición de videos.  Actualmente, Kike estudia sistema de información geografía e ingeniería ambiental con el fin de contribuir a la investigación del cambio climático y al desarrollo sostenible de los recursos naturales.</p>
                </TextContainer>

                <ImageSection src = {imgResearch} />

            </SubSection>

            <SubSection>

                <TextContainer>
                    <h2>Personal de Programas </h2>
                    
                        <h3>Jessica Villacorta Villacorta<br></br><span> - Agrónoma</span></h3> 
                        <p>Jessica se graduó como ingeniero agrónomo de la Universidad Nacional San Antonio Abad del Cusco. Inició su trabajo en ANDES en marzo 2015 en el proyecto de Innovación de Pequeños Agricultores para la Resiliencia (SIFOR), un proyecto de investigación del cambio climático, la conservación de la papa nativa y el mejoramiento participativo en escuelas de campo.</p>    

                        <h3>Oscar Ramos<span> <br></br> - Agrónomo</span></h3> 
                        <p>Oscar se graduó como ingeniero agrónomo de la Universidad Nacional de San Antonio Abad del Cusco. Inició su trabajo en ANDES en marzo 2015 en los proyectos de SD=HS y de SIFOR. Trabaja en el plan de conservación de papa y del mejoramiento participativo de maíz y papas en Lares.</p>

                        <h3>Ricardo Pacco Chipa<br></br><span> - Coordinador Local</span></h3> 
                        <p>Ricardo es líder de la comunidad Quechua de Paru Paru, una de las comunidades del Parque de la Papa. Ha trabajado de técnico local desde 2002 y participa en redes de comunidades indígenas. Actualmente, es Coordinador Local del proyecto SD=HS en el distrito de Lares.</p>    

                        <h3>Cass Madden<span> <br></br> - Investigadora y Coordinadora, INMIP</span></h3> 
                        <p>Cass se graduó de The School for International Training (SIT) con su maestría en cambio climático y sustentabilidad global. Trabaja en la investigación de Food Neighborhoods para escalar el modelo de conservación biocultural implementado en el Parque de la Papa. </p>


                        <h3>Hannah Argumedo Stenner<span> <br></br> - Asistente de Proyectos en Campo</span></h3> 
                        <p>Hannah se graduó como trabajadora social de Ryerson University en Canada. Trabaja en la coordinación de actividades de jovenes en el Parque de la Papa. </p>
                </TextContainer>

                <ImageSection src = {imgNoticias} />

            </SubSection>


        </MarginTopContainer>
 );
}
 
export default connect(Staff);
