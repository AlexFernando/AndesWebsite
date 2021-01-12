import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, MainParagraph, CardsContainer, Card} from './potatoPark'
import transgenicos from '../static/images/transgenicos.jpg';
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
                    Political Impact
                </Title>
                <SubTitle>
                    Transgenics <br></br> Biopiracy
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    ANDES integrates matter of ethics and social and environmental justice to work, such as the right to land, biocultural protocols, intellectual property rights, and the negotiation of common interests in local, national and international processes.
                </MainParagraph>
                
                <p>
                Our approach is the empowerment of local voices and the marginalized in proposals for biocultural conservation and sustainable development, as well as the defense and promotion of human rights and the rights of the Pachamama. Likewise, ANDES promotes the rights of indigenous peoples to natural resources and territories, to their cultural expressions, practices and traditional knowledge.
                </p> 

                <p>
                    
ANDES promotes and participates in the creation of a global solidarity movement of organizations, actors and local communities linked through networks of South-South and South-North cooperation and collective discovery, to develop alternatives and creative responses to global challenges such as climate change and the loss of biological and cultural diversity. As part of this drive, ANDES actively participates in international fora, such as the Convention on Biological Diversity and the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP).                   
                </p>

             
                <FixedCard>
                    
                    <img src={transgenicos}/>

                    <SectionText>
                        <div>
                            <h1>Rejecting Transgenics in Peru</h1>

                            <p>
                                Asociación ANDES, along with the Association of the Communities of the Potato Park, has signed a declaration against transgenics in Peru.
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
                    <h1>October 18, 2020</h1>              
                    <p>Open Letter to the President of the Republic of Peru - Extension of moratoratia to production of transgenics</p>
                    <div>
                        <a href="https://andes.org.pe/wp-content/uploads/2020/10/Carta-Abierta-al-Presidente-de-Peru-Ampliacion-de-la-moratoratia-a-transgenicos-18-10-20.pdf" target="_blank" rel="noopener">READ MORE</a>
                    </div>
                </div>

                <div>  
                    <h1>Octubre 20, 2020</h1>              
                    <p>Congress extends moratorium on GM production until 2035.</p>
                    <div>
                        <a href="https://larepublica.pe/economia/2020/10/20/congreso-amplia-moratoria-a-transgenicos-hasta-diciembre-del-2035/?fbclid=IwAR16fczjYrejroXMDUpPQaTJ4pQZ4VP0nSpAGcDRZXbF5KNzdrWSDU9-0FA" target="_blank" rel="noopener">LEER MAS</a>
                    </div>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(Politica);