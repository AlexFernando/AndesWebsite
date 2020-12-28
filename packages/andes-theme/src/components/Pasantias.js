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
                    Pasantías
                </Title>
                <SubTitle>
                    Voluntariados <br></br> Aprende con nosotros
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    La Asociación ANDES está guiada por la misión de crear capacidades locales y respuestas estratégicas
                    para enfrentar los efectos socioeconómicos, culturales, ecológicos y políticos de los cambios globales en
                    los pueblos indígenas. Nuestro objetivo es proteger y promover el patrimonio biocultural de los pueblos
                    indígenas y los derechos tradicionales sobre los recursos asociados con ellos. ANDES prevé el bienestar
                    humano en comunidades indígenas sostenibles, basado en el respeto a los derechos humanos, la
                    diversidad cultural y la democracia participativa.
                </MainParagraph>
                <p>
                    El trabajo de ANDES con las comunidades del Parque
                    de la Papa ha ayudado a generar un impulso global detrás de la creación y protección de territorios de
                    patrimonio biocultural y “Food Neighborhoods”, salvaguardando la agrobiodiversidad y los recursos
                    culturales de los pueblos indígenas de todo el mundo. ANDES también se enfoca en la diversidad
                    epistemológica y la educación innovadora, que actualmente se está desarrollando a través de la Yachay
                    Kuychi Pluriversidad, una iniciativa educativa que tiene como objetivo crear enfoques holísticos para el
                    aprendizaje y colaboraciones entre la ciencia occidental y el conocimiento indígena.
                </p>

                <p>
                    Finalmente, ANDES
                    actúa como la Secretaría de la Red Internacional de Pueblos Indígenas de las Montañas (INMIP),
                    trabajando para conectar comunidades de todo el mundo para enfrentar los desafíos urgentes e
                    intersectantes del cambio climático, la seguridad alimentaria y los derechos humanos.
                </p>
            </SectionContainer>

            <ContainerBlocks>
                <BlockInfo>

                    <img src={pasantia1}/>

                    <div>
                        <h2>
                            VOLUNTARIADOS
                        </h2>

                        <p>
                            ANDES, INMIP y la Yachay Kuychi Pluriversidad dependen del apoyo de personal y voluntarios
                            apasionados y comprometidos para lograr su misión. Los voluntarios pueden apoyar el trabajo continuo
                            de estas organizaciones de diversas formas, que incluyen:
                        </p>
                        <p>
                            Voluntarios de eventos: roles de voluntarios a corto plazo diseñados para apoyar un evento específico.
                        </p>
                        
                        <p>
                            Voluntarios de la organización: roles que suelen durar de 3 a 6 meses durante los cuales el voluntario
                            apoya las operaciones diarias de la organización.
                        </p>

                        <p>
                            Voluntarios de comunicaciones: roles que generalmente duran de 3 a 6 meses durante los cuales el
                            voluntario apoya las comunicaciones y el alcance de la organización, incluidas las redes sociales, los
                            materiales para publicación y el mantenimiento del sitio web.
                        </p>
                    </div>
                    
                </BlockInfo>

                <BlockInfo>

                    <div>
                        <h2>PASANTIAS</h2>
                        
                        <p> Para las personas que esperan desarrollar proyectos de investigación independientes mientras
                            adquieren habilidades profesionales, ANDES ofrece oportunidades de pasantías. Los pasantes deben
                            estar actualmente inscritos en un programa universitario acreditado a nivel de pregrado o posgrado, y
                            deben desarrollar una propuesta de investigación relacionada con los temas y proyectos clave de
                            ANDES, INMIP y / o la Pluriversidad. Quienes completen la investigación deben cumplir con la obligación
                            de trabajar en colaboración con las comunidades indígenas, obtener el consentimiento en todos los
                            pasos del proceso y compartir activamente sus resultados con las comunidades asociadas.
                        </p>
                    </div>

                    <img src={pasantia2} />
                </BlockInfo>

                <BlockInfo>

                    <img src={pasantia3} />

                    <div>
                        <h3>UNA PASANTIA CON ANDES OFRECE UNA OPORTUNIDAD INCREÍBLE PARA ESTUDIANTES Y
                            PROFESIONALES DE TODOS LOS NIVELES PARA:</h3>
                        
                        <ul>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Trabajar en colaboración con las comunidades indígenas</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Participar en investigaciones innovadoras y creativas</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Trabajar desde un enfoque holístico y transdisciplinario</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Recibir formación profesional y académica en el contexto de una pequeña ONG dirigida por indígenas</li>
                            <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Mejorar las habilidades del idioma español y / o quechua</li> 
                        </ul>
                    </div>
                </BlockInfo>

                
                <BlockInfo>
                    <div>
                        <h2>PARA SOLICITAR UNA PASANTIA CON ANDES</h2>
                        
                        <h3>CALIFICACIONES DESEADAS</h3>
                        
                        <p>
                            Tenemos una fuerte preferencia por los voluntarios que hablan español e inglés con fluidez; los
                            candidatos deben al menos manejar el español a un nivel básico.
                        </p>

                        <p>
                            Es esencial que los voluntarios tengan fuertes habilidades de comunicación verbal y escrita.
                        </p>
                
                        <p>
                            Los solicitantes deben haber demostrado interés en las áreas en las que trabajan ANDES, INMIP y
                            Pluriversity.
                        </p>

                        <p>
                            Los solicitantes deben tener motivación propia y sentirse cómodos trabajando tanto de forma
                            independiente como en equipo.
                        </p>
                    </div>

                    <img src={pasantia4} />
                    
                </BlockInfo>

                <BlockInfo>
                    <img src={pasantia5} />

                    <div>
                        <span>“El voluntariado para ANDES fue una experiencia increíble,</span>
                        <p>
                            ¡definitivamente aliente a cualquier persona interesada en la biodiversidad y los derechos indígenas a
                            postularse! Una pasantía con ANDES va más allá del voluntariado: es una verdadera oportunidad
                            profesional para trabajar con una ONG y las comunidades locales.
                        </p>
                        <p>
                            Fue una experiencia inmersiva y reveladora que me dio una comprensión más profunda de la
                            colaboración responsable y recíproca con los grupos indígenas ”.
                        </p>
                        <strong>- Jessica, ex investigadora voluntaria de ANDES</strong>
                    </div>
                </BlockInfo>

                <BlockInfo>
                    <p>
                        Para solicitar un puesto de voluntario o pasantía con ANDES, INMIP o la Pluriversidad, envíe un CV
                        actualizado y una declaración de interés a Tammy Stenner a: tammy@andes.org.pe
                    </p>
                </BlockInfo>

            </ContainerBlocks>
                    </MarginTopContainer>
    );
}
 
export default connect(Pasantias);