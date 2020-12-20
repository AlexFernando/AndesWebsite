import React from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';
import {ContainerBlocks, BlockInfo} from './Pasantias';

// font awesome icons
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconList} from './TerritoriosCulturales'

const Cursos = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Cursos
                </Title>
                <SubTitle>
                    Capacitaciones <br></br> Aprende con nosotros
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <ContainerBlocks>
                <BlockInfo>
                    <h3>La Pluriversidad Yachay Kuychi ofrece una variedad de programas innovadores y adaptables para pueblos indígenas, académicos, investigadores, formuladores de políticas y otros. Los programas incluyen:</h3>
                    
                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Los programas de investigación-acción participativa sobre “food neighborhoods”, patrimonio biocultural, cambio climático, sistemas agrícolas tradicionales, cultivos subutilizados, nutrición y otros, son facilitados por líderes comunitarios, poseedores de conocimientos indígenas y científicos capacitados formalmente.</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Escuelas de campo para agricultores, donde los agricultores participan directamente en estudios de campo, desarrollan comprensión conceptual y habilidades prácticas específicas en agroecología y gestión del agua, y otros temas de interés identificados por los participantes.</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Las zonas de aprendizaje por contacto crean entornos seguros y colaborativos donde diferentes generaciones, géneros y culturas se unen para aprender unos de otros temas específicos</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>El Programa de Pasantías y Voluntariado ayuda a construir capacidad local e internacional, estableciendo alianzas y redes como fuerzas para el cambio social</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>El desarrollo de plataformas de políticas es una forma de facilitar la comunicación y la coordinación dentro de los procesos e instituciones de políticas complejos a nivel local, nacional, regional e internacional.</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Se ofrecen cursos personalizados y de interés especial en el lugar para el interés general y el desarrollo profesional.</li> 
                    </ul>
                </BlockInfo>

                <BlockInfo>
                    <h2>Detalles</h2>

                    <p>
                        Los facilitadores del curso son profesionales formados formalmente y expertos en conocimientos indígenas. Los «kits de herramientas» de los cursos para instructores son una colección dinámica y en constante evolución de métodos e instrumentos, abiertos a revisión y ampliación. Estos conjuntos de herramientas se extraen de, e integran creativamente, una variedad de fuentes: herramientas prehispánicas, los métodos de investigación de acción participativa, Internet y tecnologías inalámbricas, entre otras.
                    </p>

                    <p>
                        Previamente se han organizado intercambios y cursos para líderes empresariales indígenas de Nueva Zelanda, formuladores de políticas de México, científicos de la papa y formuladores de políticas de todo el mundo, y varios grupos universitarios de Perú, México, Chile y Estados Unidos.
                    </p>
                </BlockInfo>

            </ContainerBlocks>
        </MarginTopContainer>
    );
}
 
export default connect(Cursos);