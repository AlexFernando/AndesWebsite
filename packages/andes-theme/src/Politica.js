import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, MainParagraph, CardsContainer, Card} from './potatoPark'
import transgenicos from './static/images/transgenicos.jpg';
import {SectionText} from './HomePage';

export const FixedCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 4rem;
    border-radius: 1rem;
    background-color: #f4f4f4;

    p {
        text-align: right;
    }

    img {
        border-radius: 1rem 1rem 0 0 ;
        width: 100%;
        height: 100%;
    }
`;

const IframeStyled = styled.iframe`
    width:490px; 
    height:280px;

    
    @media(max-width: 768px) {
        max-width:100%; 
        max-height:100%;
    } 
`;

const Politica = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Incidencias Política
                </Title>
                <SubTitle>
                    Transgénicos <br></br> Biopiratería
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    ANDES integra asuntos de ética y justicia social y ambiental al trabajo, tales como, el derecho a la tierra, protocolos bioculturales, derechos intelectuales de propiedad, y la negociación de intereses comunes en procesos locales, nacionales e internacionales.
                </MainParagraph>
                
                <p>
                    Nuestro enfoque es el empoderamiento de las voces locales y de los marginados en propuestas de conservación biocultural y desarrollo sostenible, así como la defensa y promoción de los derechos humanos y los derechos de la Pachamama.  Asimismo, ANDES promueve los derechos de los pueblos indígenas a los recursos naturales y territorios, a sus expresiones culturales, prácticas y conocimientos tradicionales.
                </p> 

                <p>
                    ANDES promueve y participa en la creación de un movimiento de solidaridad global de organizaciones, actores y comunidades locales vinculadas a través de redes de cooperación y descubrimiento colectivo Sur-Sur y Sur-Norte, para desarrollar alternativas y respuestas creativas a los desafíos globales como el cambio climático y la pérdida de la diversidad biológica y cultural. Como parte de este impulso, ANDES participa activamente en fora internacional, como la Convenio sobre la Diversidad Biológica y la Declaración de las Naciones Unidas sobre los derechos de los Pueblos Indígenas (UNDRIP).
                </p>

             
                <FixedCard>
                    
                    <img src={transgenicos}/>

                    <SectionText>
                        <div>
                            <h1>Rechazando transgénicos en Perú</h1>

                            <p>
                            La asociación ANDES, junto con la asociación de las comunidades del Parque de la Papa, han firmado una declaración en contra de los transgénicos en Perú.
                            </p>
                            <div>
                                <a href="https://www.servindi.org/actualidad/24/06/2020/senor-vizcarra-el-pueblo-peruano-rechaza-los-transgenicos" target="_blank" rel="noopener" >LEER HISTORIA</a>
                            </div>
                        </div>
                    </SectionText>
                </FixedCard>
       

            </SectionContainer>

            <SectionText>

                <div>  
                    <IframeStyled

                        src="https://www.youtube.com/embed/79alPG6G5uc" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                    >
                    </IframeStyled>
                </div>

                <div>  
                    <h1>18 de Octubre del 2020</h1>              
                    <p>Carta Abierta al Señor Presidente de la Republica - Ampliacion de la moratoratia a producción de transgénicos</p>
                    <div>
                        <a href="https://andes.org.pe/wp-content/uploads/2020/10/Carta-Abierta-al-Presidente-de-Peru-Ampliacion-de-la-moratoratia-a-transgenicos-18-10-20.pdf" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>

                <div>  
                    <h1>20 de Octubre del 2020</h1>              
                    <p>Congreso amplía moratoria a producción de transgénicos hasta el 2035.</p>
                    <div>
                        <a href="https://larepublica.pe/economia/2020/10/20/congreso-amplia-moratoria-a-transgenicos-hasta-diciembre-del-2035/?fbclid=IwAR16fczjYrejroXMDUpPQaTJ4pQZ4VP0nSpAGcDRZXbF5KNzdrWSDU9-0FA" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(Politica);