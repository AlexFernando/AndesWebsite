import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card, MainParagraph} from './potatoPark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faListAlt, faLeaf, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { VerticalBorder } from './Dropdown';
import parquedemaiz from '../static/images/estudioparquemaiz.png';
import applepark from '../static/images/applePark.jpg';
import territorio from '../static/images/territoriobio.png';
import territorio2 from '../static/images/territoriobio2.png';
import territorio3 from '../static/images/territoriobio3.jpg';



export const SubSectionTitle = styled.h2`
       color: #44841a;
       padding: 2rem 1rem 0 1rem;
       font-size: 1.8rem;
       text-align: center;
`;

export const BriefSection = styled.div`
    display: flex;
    padding: 2rem 4rem;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1rem;
    }
`

export const InfoItem = styled.div`
    flex-basis: 33.33%;
    padding: 0 2rem;
    text-align: center;

    @media(max-width: 768px) {
        padding: 1rem 1rem;
    }

    p {
        line-height: 1.5;
    }
    
    h3 {
        color: #44841a;
        padding: 0 1rem 0 1rem;
    }

    ul {
        margin-top: 2rem;
        padding-left: 0;
        text-align: left;
    }

    li {
        list-style: none;
        margin-top: 1rem;
    }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: #44841a;
    font-size: 3rem;
`;

export const FontAwesomeIconList = styled(FontAwesomeIcon)`
    color: #44841a;
    margin-right: .5rem;
`;

const AditionalContainer = styled.div`
    
    display: flex;
    padding: 1rem 2rem 4rem 2rem;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
            flex-direction: column;
            padding: 0rem;
        }

    a{
        margin: 0 1rem;
        background-color: #eaeade;
        padding: 1rem;
        border-radius: 1rem;

        @media(max-width: 768px) {
            margin: .5rem 0;
        }

    }
    img {
        max-width: 100%;
        max-height: 20vh;
    }
`;

const TerritoriosCulturales = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Territorios Bioculturales
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Desarrollo endógeno <br></br>Conservación de la biodiversidad
                </SubTitle>
                
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    Mosaicos de uso de la tierra que abarcan tenencia de la tierra tradicional y indígena, sistemas de producción e intercambio, 
                    identidad cultural, organización comunitaria y objetivos simultáneos de desarrollo endógeno y conservación de la biodiversidad.
                </MainParagraph>
                <p>
                    La Asociación ANDES, en colaboración con comunidades indígenas en Perú y en todo el mundo,
                    ha trabajado durante las últimas décadas para definir, expandir y proteger los territorios 
                    del patrimonio biocultural. 
                </p>

                <p>
                    A través de los intercambios de aprendizaje facilitados por la 
                    Red Internacional de Pueblos Indígenas de Montaña (INMIP), las comunidades indígenas en países 
                    que van desde Kenia hasta la India y Kirguistán han trabajado para implementar el modelo de 
                    herencia biocultural.
                </p>
            </SectionContainer>

            <BriefSection>

                <InfoItem>
                    
                    <FontAwesomeIconStyled icon={faQuestionCircle}/>
                    <h3>¿POR QUÉ?</h3>
                    <p>
                    La erosión actual de  la genética y la diversidad cultural es sin precedentes, y se pone cada vez más difícil para comunidades alrededor del mundo para enfrentar los impactos adversos del cambio climático, los amenazas al seguridad alimentaria,  y la escasez del agua. 
                    </p>
                    <p>Territorios del patrimonio biocultural, que utilizan la gestión integrada del paisaje, ofrecen un modelo claro para adaptarse al cambio.</p>
                </InfoItem>
                <VerticalBorder></VerticalBorder>
                
                <InfoItem>
                    <FontAwesomeIconStyled icon={faListAlt}/>
                    
                    <h3>NUESTRAS AMBICIONES</h3>

                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Conservar la agrobiodiversidad</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Fortelecer la seguridad alimentaria</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Mejorar medios de vida</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Proteger el patrimonio biocultural</li> 
                    </ul>

                </InfoItem>
                <VerticalBorder></VerticalBorder>
                <InfoItem>
                
                    <FontAwesomeIconStyled icon={faLeaf}/>
                    
                    <h3>AREAS DE IMPACTO</h3>
                
                    <ul>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Agrobiodiversidad</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Diversidad Cultural</li>
                        <li><FontAwesomeIconList icon={faArrowAltCircleRight}/>Pobreza y Desigualdad</li>
                    </ul>
                </InfoItem>
            </BriefSection>

            <SubSectionTitle>Casos de Estudio</SubSectionTitle>
            <CardsContainer>
                <Card>
                    <img src={applepark} />

                    <h3>Parque de manazana y Parque de Trigo, Tajikistan</h3>

                    <span>
                    Descubre la historia de la conservacion de Descubra la historia de cómo los agricultores indígenas en Tayikistán están implementando el modelo de patrimonio biocultural para proteger su diversidad de trigo y manzana. El centro de origen de estos dos cultivos de importancia mundial se encuentra en las tierras de Asia Central de estos agricultores.
                    </span>

                    <a href="https://andes.org.pe/wp-content/uploads/2020/07/Apple-and-Wheat-Park-Case-Study.pdf" target="_blank" rel="noopener" >Ver Estudio</a>
                </Card>

                <Card>
                    <img src={parquedemaiz} />

                    <h3>Parque de Maiz, Peru</h3>

                    <span>
                    Descubre la historia de la conservacion de Descubra la historia de cómo los agricultores indígenas en Tayikistán están implementando el modelo de patrimonio biocultural para proteger su diversidad de trigo y manzana. El centro de origen de estos dos cultivos de importancia mundial se encuentra en las tierras de Asia Central de estos agricultores.
                    </span>

                    <a href="http://andes.org.pe/wp-content/uploads/2020/03/Maize-Park-Case-Study.pdf" target="_blank" rel="noopener" >Ver Estudio</a>
                </Card>
            </CardsContainer>

            <SubSectionTitle>Recursos adicionales</SubSectionTitle>
            
            <AditionalContainer>
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio2} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={territorio3} /></a>
            
                <a href="https://www.iied.org/" target="_blank" rel="noopener" ><img src={parquedemaiz} /></a>
            </AditionalContainer>
        </MarginTopContainer>
    );
}
 
export default connect(TerritoriosCulturales);