import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import imgCambioClimatico from '../static/images/programas1.jpeg';
import imgMountainsIndiginous from '../static/images/programas2.jpg';
import imgNativePotato from '../static/images/programas3.jpg';

const InternationalPrograms = () => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Programas y redes internacionales
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Andes para el Mundo
                </SubTitle>
              
            </HeadContainer>

            <SectionContainer>
                <p>
                Además de los proyectos en Perú, ANDES trabaja internacionalmente a través de varias redes, alianzas y proyectos centrados en el cambio climático, los derechos indígenas y las políticas.
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={imgCambioClimatico} />

                        <h3>Indigenous Peoples Biocultural Climate Change Assessment Initiative (IPCCA)</h3>

                        <span>
                            ANDES actúa como la secretaría de la Evaluación del Cambio Climático de los Pueblos Indígenas, cuyo objetivo es integrar las perspectivas y experiencias indígenas en la toma de decisiones mundiales para la adaptación y la resiliencia al cambio climático.
                        </span>

                        <a href="https://ipcca.info/" target="_blank" rel="noopener" >Ver Proyecto</a>
                    </Card>


                    <Card>
                        <img src={imgMountainsIndiginous} />

                        <h3>International Network of Mountain Indigenous Peoples (INMIP)</h3>

                        <span>
                            ANDES actúa como secretaría de la Red Internacional de Pueblos Indígenas de Montaña, que se centra en la protección de los derechos bioculturales en los centros mundiales de origen de cultivos. Actualmente, la red está trabajando hacia la creación de una red global de "Food Neighborhoods."
                        </span>

                        <a href="https://inmip.net/" target="_blank" rel="noopener" >Ver Proyecto</a>
                    </Card>

                    <Card>
                        <img src={imgNativePotato} />

                        <h3>Almacenamiento de semillas de papa nativas en la banco de semillas internacional, Svalbard</h3>

                        <span>
                        En 2016, los agricultores del Parque de la Papa en colaboración con ANDES llevaron sus semillas a la colección en el banco mundial de semillas en Svalbard, para protegerlas para toda la humanidad.
                        </span>

                        <a href="https://vimeo.com/200658165" target="_blank" rel="noopener" >Ver Proyecto</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(InternationalPrograms);