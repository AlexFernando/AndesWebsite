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
                25 PROYECTOS, INTERCAMBIOS Y CAMPAÑAS
                </Title>
                <SubTitle>
                    Celebrando<br></br> el 25th Aniversario
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
            
                    <h1>ANDES Celebra sus 25 Años</h1>              
                    <p> Como parte de las celebraciones de nuestro 25 aniversario, nos gustaría compartir algunos
                    de los resultados de los proyectos, campañas y eventos pasados ​​de ANDES, que, por
                    supuesto, solo son posibles gracias a las importantes contribuciones de nuestros socios. Ha
                    habido demasiadas acciones para nombrarlas todas, pero aquí hay algunos de los aspectos
                    más destacados de los 25 años de historia de ANDES.</p>

                    <h1>25 proyectos, intercambios e campañas</h1>
                    <p>
                        Apoyar al establecimiento de Territorios de Patrimonio Biocultural Indígena es motivo de
                        mucho orgullo en ANDES. Brindamos asistencia técnica, desarrollo de capacidades,
                        recaudación de fondos y forjamos alianzas para apoyar a las comunidades indígenas en los
                        Andes y en todo el mundo para proteger sus paisajes, sistemas alimentarios, cultura y
                        derechos.
                    </p> 
            
            </SectionContainer>


            <SectionContainer>
            
                    <h1>Nuestros colegas en el Parque de la Papa, el Parque Chalakuy y el Parque Espiritual
                        Vilcanota continúan inspirándonos y motivándonos en nuestro trabajo, y ¡son una
                        inspiración para la acción positiva en todo el mundo!
                    </h1>
                    
                    <SectionProjectText>
                        <div>
                            <Link href="/parquedelapapa-pisac"><h3>1.- Parque de la papa</h3></Link>
                            <Link href="/parquedemaiz-lares"><h3>2.- Parque Chalakuy</h3></Link> 
                            <Link href="/parqueespiritual-vilcanota/"><h3>3.- Parque Espiritual de Vilcanota</h3></Link>  
                        </div>

                        <div>
                            <Images src={parquepapa}/>
                        </div>
                    </SectionProjectText>
            
            </SectionContainer>


            <SectionContainer>
                
                <h1>Un componente clave del trabajo de ANDES es la investigación-acción liderada por
                    comunidades, particularmente con las comunidades indígenas en los Andes y alrededor del
                    mundo. Nuestra investigación colaborativa y el desarrollo de políticas se centra en los
                    vínculos entre las acciones locales y los procesos globales.
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
                <h1>Gran parte del impacto de ANDES es el resultado de sus programas educativos
                    innovadores, que reúnen a pueblos indígenas, agricultores, científicos, académicos y
                    hacedores de políticas para abordar problemas complejos, incluidos el cambio climático,
                    los sistemas alimentarios indígenas, la pérdida de biodiversidad y los derechos de los
                    pueblos indígenas y nuestra madre tierra.
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
                    <h1>ANDES también ha asumido un papel de liderazgo en redes internacionales como INMIP,
                        IPCCA e ISE. Los intercambios de conocimiento anuales entre los miembros de la Red
                        Internacional De Pueblos Indígenas de Montana (INMIP)) han forjado alianzas sólidas y
                        voces unificadas para crear conciencia e influir en las políticas a nivel local, nacional e
                        internacional.
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

                <h1>Finalmente, ANDES participa activamente en campañas públicas para influir en las políticas
                    que impactan a los pueblos indígenas, sus sistemas alimentarios, derechos y medios de
                    vida.</h1>

                <SectionProjectText>
                    <div>                 
                        <a><h3>23.- Ordenanza Municipal contra los Transgenicos</h3></a>

                        <a><h3>24.- Campania contra Biopirateria</h3></a>

                        <a><h3>25.- Campana contra nuevas herramientas para edición de genes</h3></a>
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