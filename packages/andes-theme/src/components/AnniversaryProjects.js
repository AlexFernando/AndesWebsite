import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import parquepapa from '../static/images/parquepapa.jpg';
import Krystyna from '../static/images/Krystynascaled.jpeg';
import papaGMrechazo from '../static/images/news/papaGMrechazo.jpg'
import agrobiodiversidad from '../static/images/news/agrobiodiversidad.jpg'
import groupLares from '../static/images/FotogrupalLarescaled.jpg'
import Link from "./Link";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 1rem 2rem;

    :nth-of-type(odd){
        background-color: #eaeaea;
    }
    
    :nth-of-type(even){
        background-color: #fff;
    }

    @media(max-width: 768px) {
        padding: 3rem 1rem 1rem 1rem;
    }

        h1 {
            color: #44841a;
            text-align: center;
            font-size: 1.5rem;
            margin-top: 3rem;
        }

        a {
            text-decoration: none;
            color: #000;

            h3 {
                font-size: 1.2rem;
            }
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 0rem;
            text-align: center;
        } 
`

export const SectionProjectText = styled.div` 
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 2rem;
    
    div {
        flex-basis: 45%;
        margin: 0 1rem;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;


export const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const AnniversaryProjects = ({state}) => {
    return ( 
    
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                25 PROJECTS, EXCHANGES AND CAMPAIGNS
                </Title>
                <SubTitle>
                    Celebrating <br></br> the 25th Anniversary
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
            
                    <h1>ANDES Celebrates 25 th Anniversary</h1>              
                    <p> As part of our 25 th anniversary celebrations, we would like to share some of the results of
                        ANDES’ past projects, campaigns and events, which, of course, are only possible thanks to
                        important contributions by our partners. There have been too many actions to name them all,
                        but here are a few of the highlights from ANDES’ 25-year history..</p>

                    <h1>25 projects, campaigns and exchanges</h1>
                    <p>
                        Supporting the establishment of Indigenous Biocultural Heritage Territories is a source of much
                        pride at ANDES. We provide technical assistance, capacity building, fundraising, and forge
                        alliances to support indigenous communities in the Andes and around the world to protect their
                        landscapes, food systems, culture and rights.
                    </p> 
            
            </SectionContainer>


            <SectionContainer>
            
                    <h1>Our colleagues in the Potato Park, Chalakuy Park, and Vilcanota Spiritual Park continue to
                        inspire and motivate us in our work, and they are an inspiration for positive action around
                        the world!
                    </h1>
                    
                    <SectionProjectText>
                        <div>
                            <Link href="/parquedelapapa-pisac"><h3>1.- Potato Park</h3></Link>
                            <Link href="/parquedemaiz-lares"><h3>2.- Chalakuy Park</h3></Link> 
                            <Link href="/parqueespiritual-vilcanota/"><h3>3.-Spiritual Park of Vilcanota</h3></Link>  
                        </div>

                        <div>
                            <Images src={parquepapa}/>
                        </div>
                    </SectionProjectText>
            
            </SectionContainer>


            <SectionContainer>
                
                <h1>
                    A key component of ANDES work is community-led action research, particularly with
                    indigenous communities in the Andes and around the world. Our collaborative research
                    and policy development focuses on links between local actions and global processes.
                </h1>

                
                <SectionProjectText>
                    <div>
                        <a href="https://www.millenniumassessment.org/en/SGA.Peru.html" target="_blank" rel="noopener"><h3>4.- Millenium Ecosystem Assessment (UN)</h3></a>
                        <h3>5.- Turismo Biocultural: conservación y uso sostenible dela agrobiodiversidad (INTERVITA, CARIPLO)</h3> 
                        <a href="https://www.iied.org/sustaining-local-food-systems-agricultural-biodiversity" target="_blank" rel="noopener" ><h3>6.- Sustaining Local Food Systems, Agricultural Biodiversity and Livelihoods (IIED)</h3> </a> 
                        <a href="https://www.iied.org/smallholder-innovation-for-resilience-sifor" target="_blank" rel="noopener"> <h3>7.- Smallholder Farmers Innovation for Resilience - SIFOR (IIED)</h3> </a>
                        <h3>8.- Putting lessons into practice: Scaling up Peoples’ Biodiversity Management for Food Security (IFAD, OXFAM-NOVIB)</h3> 
                        <a href="https://www.sdhsprogram.org/" target="_blank" rel="noopener"> <h3>9.- Sowing Diversity = Harvesting Security – SD=HS (OXFAM-NOVIB)</h3> </a> 
                        <h3>10.- Employing Indigenous Knowledge to Advance Human Rights and Biocultural Heritage Security(HESP) </h3> 
                    </div>

                    <div>
                        <Images src={groupLares}/>
                    </div>
                </SectionProjectText>
                
            </SectionContainer>


            <SectionContainer>
                <h1>
                    Much of ANDES impact is a result of its innovative education programs, which bring
                    together indigenous peoples, farmers, scientists, academics and policy makers to address
                    complex problems, including climate change, indigenous food systems, biodiversity loss,
                    and the rights of indigenous peoples and our mother earth.
                </h1>

                <SectionProjectText>
                        <div>
                            <Link href="/quienessomos"> <h3>11.- Pluriversidad Yachay Kuychi</h3></Link>
                            
                            <a href="https://pubs.iied.org/G01277/" target="_blank" rel="noopener">
                                <h3>12.- Using video to document traditional knowledge: India – Peru Technical and Cultural Exchange</h3>
                            </a>

                            <a>
                                <h3>13.- Latin America Regional Study: Impacts of Climate Change on Indigenous Peoples and Traditional Knowledge(WB, ESSA)</h3>
                            </a>

                            <a>
                                <h3>14.- Biocultural Festival US – Peru musical acts</h3>
                            </a>

                            <a>
                                <h3>15.- Latido de los Apus</h3>
                            </a>

                        </div>

                        <div>
                            <Images src={Krystyna} />
                        </div>
                </SectionProjectText>
            </SectionContainer>

            <SectionContainer>
                    <h1>
                        ANDES has also taken a leading role in international networks such as INMIP, IPCCA and
                        ISE. The annual knowledge exchanges and Walking Workshops with members of the
                        International Network of Indigenous Peoples (INMIP) have forged strong alliances and
                        unified voices to raise awareness and influence policy at local, national and international
                        levels.
                    </h1>
                <SectionProjectText>
                    <div>
                        <a><h3>16.- Indigenous Peoples Climate Change Assessment (IPCCA)</h3></a>

                        <a><h3>17.- International Society of Ethnobiology (ISE)</h3></a>
                            
                        <a><h3>18.- INMIP Bhutan</h3></a>
                        
                        <a><h3>19.- INMIP China</h3></a>

                        <a><h3>20.- INMIP Tajikistan</h3></a>

                        <a><h3>21.- INMIP Kyrgyzstan</h3></a>

                        <a><h3>22.- INMIP Perú</h3></a>
                    </div>

                    <div>
                        <Images src={papaGMrechazo} />
                    </div>
                </SectionProjectText>
            </SectionContainer>

            <SectionContainer>

                <h1>Finally, ANDES actively engages in public campaigns to influence policies that impact
                    indigenous peoples, their food systems, rights and livelihoods.</h1>

                <SectionProjectText>
                    <div>                 
                        <a><h3>23.- Municipal Ordinance on GMOs</h3></a>

                        <a><h3>24.- Campaign Against Biopiracy</h3></a>

                        <a><h3>25.- Campaign against new gene editing tools</h3></a>
                    </div>

                    <div>
                        <Images src={agrobiodiversidad} />
                    </div>
                </SectionProjectText>
            </SectionContainer>
                
        </MarginTopContainer>
        
     );
}
 
export default connect(AnniversaryProjects);