import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import imgAgricultores from '../static/images/parquepapa.jpg';
import imgSistemaAyllu from '../static/images/parquepapa2.jpg';
import imgInnovacioneBio from '../static/images/link4.jpeg';

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 2rem 2rem 2rem;

    @media(max-width: 768px) {
        padding: 0 1rem 0 1rem;
    }

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

    @media (max-width: 768px){
        margin: 1rem 0 1rem 0;
    }

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
                    Potato Park - Pisaq
                </Title>
                <SubTitle>
                    The Ayllu System<br></br>Biocultural innovations
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <MainParagraph>
                    The Potato Park is located in the Pisac district, approximately 40 kilometers from the city of Cusco (Peru), in the Sacred Valley of the Incas. Covering an area of ​​9280 hectares and located at a height between 3400 and 4600 meters above sea level.
                </MainParagraph>
                
                <p>
                    The park is collectively managed by five indigenous Quechua communities – Amaru, Chawaytire, Pampallacta, Paru Paru and Sacaca – with the support of the ANDES. Within their territory, the communities conserve more than 1,300 varieties of native potatoes. There are also three crop wild relatives of potato, which are like the grandparents of cultivated potatoes.
                </p> 

            
                <CardsContainer>
                    <Card>
                        <img src={imgInnovacioneBio} />

                        <h3>Biocultural innovations in the Potato Park</h3>

                        <span>
                        The Potato Park is not just an initiative to conserve varieties of potatoes. It is, above all, a biocultural territory dedicated to the conservation of the heritage of the indigenous communities that live there. 
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2018/07/G03917.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>


                    <Card>
                        <img src={imgSistemaAyllu} />

                        <h3>The Ayllu System of the Potato Park</h3>

                        <span>
                            Not only hundreds of cultivated potato varieties but also the related wild species, the landscape and all its elements which include the knowledge, traditions, innovations, and worldview of the more than 6,000 inhabitants.
                        </span>

                        <a href="https://satoyama-initiative.org/old/the-ayllu-system-of-the-potato-park/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>

                    <Card>
                        <img src={imgAgricultores} />

                        <h3>Peruvian Farmers could Save the Planet</h3>

                        <span>
                            Not only hundreds of cultivated potato varieties but also the related wild species, the landscape and all its elements which include the knowledge, traditions, innovations, and worldview of the more than 6,000 inhabitants.
                        </span>

                        <a href="https://modernfarmer.com/2019/12/how-peruvian-potatoes-might-be-key-to-feeding-the-planet/" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
            
        </MarginTopContainer>
    );
}
 
export default connect(PotatoPark);