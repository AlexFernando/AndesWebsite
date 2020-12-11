import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import imgAgricultores from './static/images/parquepapa.jpg';
import imgSistemaAyllu from './static/images/parquepapa2.jpg';
import imgInnovacioneBio from './static/images/link4.jpeg';

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem 2rem 2rem;

    p {
        padding: 2rem 25rem 0 4rem;
        line-height: 1.5;
        font-size: 1.1rem;
        color: #545454;
        margin-bottom: 0;

        @media(max-width: 768px) {
            padding: 0 1rem 0 1rem;
            font-size: 1rem;
        }
    }
`;

export const MainParagraph = styled.span`
        padding: 0 25rem 0 4rem;
        line-height: 1.5;
        font-size: 1.4rem;
        color: #4c4c4c;

        @media(max-width: 768px) {
            padding: 0 1rem 0 1rem;
            font-size: 1.2rem;
        }
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    flex-basis: 33.33%;
    flex-grow: 1;
    
    align-items: center;
    background-color: #eaeade;
    line-height: 1.2;
    margin: 2rem;
    border-radius: 1rem;
    padding-bottom: 1.5rem;

    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 1rem 1rem 0 0;        
    }

    h3 {
        color: #44841a;
        padding: 0 1rem 0 1rem;
    }

    span {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: 400;
        font-size: 1rem;
        color: #545454;
    }
    
    a {
        text-decoration: none;
        background-color: #f07723;
        color: #fff;
        padding: .8rem;
        border-radius: 10px;
    }
`;

const PotatoPark = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Parque de la Papa - Pisaq
                </Title>
                <SubTitle>
                    El Sistema Ayllu<br></br>Innovaciones Bioculturales
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    El Parque de la Papa está ubicado en el distrito de Pisac, aproximadamente a 40 kilómetros de la ciudad de Cusco (Perú), en el Valle Sagrado de los Incas. Cubriendo una superficie de 9280 hectáreas y ubicada en una altura entre 3400 y 4600 metros arriba del nivel del mar.
                </MainParagraph>
                
                <p>
                    El parque esta administrado colectivamente por seis comunidades indígenas (Quechua) – Amaru, Chahuaytire, Cuyo Grande, Pampallacta, Paru Paru y Sacaca – con el apoyo de la asociación ANDES. Dentro de su territorio, los seis comunidades conserven más de 1300 papas nativas. Se cuenta también tres especies silvestres de la papa, cuales  son como los abuelos de la papa cultivada.
                </p> 

                <p>
                    El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven acá: no solamente cientos de variedades cultivadas pero igualmente las especies silvestres emparentadas, el paisaje y sus elementos que incluyen también conocimientos, tradiciones, innovaciones y la cosmovisión de los más de 6000 habitantes.
                </p>

                <CardsContainer>
                    <Card>
                        <img src={imgInnovacioneBio} />

                        <h3>Innovaciones bioculturales en el Parque de la Papa</h3>

                        <span>
                            El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2018/07/G03917.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>


                    <Card>
                        <img src={imgSistemaAyllu} />

                        <h3>El sistema Ayllu en el Parque de la Papa</h3>

                        <span>
                    El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="https://satoyama-initiative.org/old/the-ayllu-system-of-the-potato-park/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>

                    <Card>
                        <img src={imgAgricultores} />

                        <h3>Agricultores Peruanos puede salvar el planeta</h3>

                        <span>
                            El Parque de la Papa no es solamente una iniciativa de conservación de varias variedades de papas. Es, sobre todo, un territorio bio cultural dedicado a la conservación del patrimonio de seis comunidades indígenas que viven en la zona
                        </span>

                        <a href="https://modernfarmer.com/2019/12/how-peruvian-potatoes-might-be-key-to-feeding-the-planet/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
            
        </MarginTopContainer>
    );
}
 
export default connect(PotatoPark);