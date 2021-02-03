import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import imgPluriculturalidad from '../static/images/link3.jpg';
import vilcanotaFirst from '../static/images/vilcanota1scaled.jpg'
import vilcanotaSecond from '../static/images/vilcanota2scaled.jpg'


const VilcanotaPark = () => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    The Spiritual Park of Vilcanota
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Biodiversity hotspot<br></br>Milenary Culture
                </SubTitle>
              
            </HeadContainer>

            <SectionContainer>
                <p>
                
                What is the relationship between spirituality, a healthy ecosystem, and the fight against poverty? In the Canchis, Quispicanchis, and Paucartambo provinces of Cusco, local indigenous communities believe that spiritual practices should be a fundamental aspect of protection policies and development.<br></br><br></br>

                Located in a region recognized as a biodiversity hotspot and home to an ancient culture that has experienced little influence from the outside, like the community of Q’eros, the communities have decided to fight the erosion of their culture and their environment, establishing a special conservation area. The Vilcanota Spiritual Park is dedicated to preserving the integrity of the spiritual and ecological values ​​of the resident Quechua peoples. This is the first Sacred Natural Site of Peru, a model that recognizes and promotes Quechua values and recognizes their inherent importance for the conservation and sustainable use of biodiversity.<br></br><br></br>
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={vilcanotaFirst} />

                        <h3>The Sacred Nature of the Area</h3>

                        <span>
                        The natural landscape of the Vilcanota region has long been protected by the communities themselves through their cultural practices and their incorporation into cosmological systems that give biological elements spiritual and symbolic meaning. Sites of spiritual value (such as caves, mountains, rivers, lakes, and even entire ecosystems) have remained in their natural or almost natural state due to the access restrictions that these beliefs imply. Thus, sacred natural sites, with little interference from human activity, provide sanctuaries for threatened species and could serve as potential genetic pools to recover degraded ecosystems.
                        </span>

                    </Card>


                    <Card>
                        <img src={vilcanotaSecond} />

                        <h3>A Natural Sacred Area</h3>

                        <span>
                            Based on the fact that ecosystems cannot be understood, conserved, or managed without maintaining the cultures that have modified, created, and recreated them throughout history, and in response to external threats and changes, on December 6, 2004, the Quechua communities of Q’eros and Ausangate created the Vilcanota Spiritual Park as the first Sacred Natural Site in Peru. This model of protection recognizes that biological and cultural diversity is in a relationship of mutual dependence and reinforcement, and that both are essential for the continuity of both social and ecological systems. This initiative, led by the communities themselves, is being implemented with the help of government agencies such as CONAM and INRENA.
                        </span>

                    </Card>

                    <Card>
                        <img src={imgPluriculturalidad} />

                        <h3> un Área de Patrimonio Bio-cultural Indígena</h3>

                        <span>
                            Likewise, it has the support of international organizations such as the IIED (International Institute for Environment and Development) of the United Kingdom. Its management is in the hands of the Pro-Parque Espiritual Vilcanota committee with the support of ANDES. This management is entirely based on local governance systems. The communities of the Park form the General Assembly of the PRO-PARQUE ESPIRITUAL DEL VILCANOTA Committee, which is the decision-making body. Each community is represented on the Committee by their respective Community Presidents. The communal presidents plus the Mayor of the Centro Poblado of Tinki elect the Board of Directors of the Pro-Parque Espiritual Committee that constitutes the management body, whose legal status is registered in the public records of Cusco. This organization was founded on January 31, 2003 in Tinki with the participation of more than 150 delegates and its first president is currently the Mayor of Tinki.
                        </span>

                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(VilcanotaPark);