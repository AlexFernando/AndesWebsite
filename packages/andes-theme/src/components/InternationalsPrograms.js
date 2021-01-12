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
                    International Programs and Networks
                </Title>
                <SubTitle>
                    Networks, Alliances y Projets<br></br>ANDES to the World
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <p>
                    In addition to projects in Peru, ANDES works internationally with a variety of networks, alliances and projects focused on climate change, indigenous rights, and political advocacy.
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={imgCambioClimatico} />

                        <h3>Indigenous Peoples Biocultural Climate Change Assessment Initiative (IPCCA)</h3>

                        <span>
                            ANDES acts as the secretariat for the IPCCA, whose objective is the integration of indigenous perspectives and experiences in global decision-making processes related to adaptation and resilience to climate change.
                        </span>

                        <a href="https://ipcca.info/" target="_blank" rel="noopener" >View Project</a>
                    </Card>


                    <Card>
                        <img src={imgMountainsIndiginous} />

                        <h3>International Network of Mountain Indigenous Peoples (INMIP)</h3>

                        <span>
                        ANDES acts as the secretariat for INMIP, and international network which focuses on the protection of biocultural rights in global centers of crop origin and diversity. Currently, the network is working towards the creation of a global network of "Food Neighborhoods."
                        </span>

                        <a href="https://inmip.net/" target="_blank" rel="noopener" >View Project</a>
                    </Card>

                    <Card>
                        <img src={imgNativePotato} />

                        <h3>Storage of native potato seeds in the International Seed Vault, Svalbard</h3>

                        <span>
                            In 2016, the farmers of the Potato Park, in collaboration with ANDES, brought their collection of native potato seeds to the International Seed Vault in Svalbard, in order to protect them for the benefit of all humanity.
                        </span>

                        <a href="https://vimeo.com/200658165" target="_blank" rel="noopener" >View Project</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(InternationalPrograms);