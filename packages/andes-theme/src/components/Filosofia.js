import React from 'react';
import {connect, css, styled } from "frontity";
import missionImg from '../static/images/mision.jpeg';
import visionImg from '../static/images/vision.jpeg';

export const MarginTopContainer = styled.div`
    margin-top: 14vh;

    @media(max-width: 768px) {
        margin-top: 10vh;
    }
`;

export const Title = styled.span`
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: 2;
 
    @media(min-width: 768px) {
        font-size: 2.5rem;
    }
`
export const SubTitle = styled.h2 `
    display: flex;
    flex-wrap: nowrap;
    align-items: center;   
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
    margin: 2rem 0 2rem 0;

    @media(min-width: 768px) {
        font-size: 5rem;
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
                <SubTitle>Nuestra mision<br></br> vision y objetivos</SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <SubSectionContainer>
                    <div>
                        <h3>Nuestra Misión</h3>
                        <p>Nuestra misión es impulsar un enfoque de conservación y desarrollo basado en los derechos a través de la implementación de Territorios Bioculturales, un modelo que se ha implementado con éxito en el Parque de la Papa. 
                        <br></br>Este modelo creativamente une el ancestral principio andino y filosofía de bienestar, Sumaq Kawsay, a la ciencia moderna y a las metodologías de investigación para promover sistemas agrarios resilentes por su biodiversidad. Además promovemos el desarrollo endógeno y la reducción de la pobreza. Este trabajo se realiza en comunidades sustentables indígenas establecidas en los andes peruanos basados en sus propias capacidades y recursos mediante estrategias locales de desarrollo.</p>

                        <h3>Nuestra Visión</h3>
                        <p>Nuestra visión es crear capacidades locales y respuestas estratégicas de base ante los efectos socio-económicos, culturales, ecológicos y de políticas del proceso de globalización sobre las comunidades locales, así como la protección de sus recursos, conocimientos y los derechos asociados a estos recursos.</p>
                    </div>
                
                    <ImageStyle src={visionImg} />
                </SubSectionContainer>

                <SubSectionContainer>
                    <div>
                        <h3>Nuestros Objetivos</h3>
                        <ul>
                            <li>La búsqueda del buen vivir en todas sus dimensiones a través la defensa, promoción y celebración de la diversidad en sus diferentes manifestaciones sociales, naturales, bioculturales y espirituales en términos de ideas, conocimientos y otras formas de autoexpresión.</li>
                            <br></br><li>El establecimiento y difusión al nivel global de modelos innovadores de desarrollo comunal sostenible y territorial capaces de resolver los desafíos ambientales, sociales y culturales que las comunidades rurales se enfrenta.</li>
                            <br></br><li>La generación de políticas regionales, nacionales e internacionales que privilegian las voces locales y marginados en la promoción de la conservación biocultural y en las áreas relacionadas con el desarrollo sostenible.</li>
                            <br></br><li>La creación de un movimiento de solidaridad global de organizaciones, actores y comunidades locales vinculadas a través de redes de cooperación y descubrimiento colectivo Sur-Sur y Sur-Norte, para desarrollar alternativas y respuestas creativas a los desafíos globales.</li>
                        </ul>
                    </div>

                    <ImageStyle src={missionImg} />
                </SubSectionContainer>
            </SectionContainer>
            
        </MarginTopContainer>

    );
}
 
export default connect(Filosofia);