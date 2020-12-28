import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionText} from './HomePage';
import {TextContainer} from './Stuff';
import groupAndes from '../static/images/FotogrupalANDESytecnicosscaled.jpg';
import groupLares from '../static/images/FotogrupalLarescaled.jpg';
import Krystyna from '../static/images/Krystynascaled.jpeg';


export const SectionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 0 0;
    background-color: #eaeaea;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const Images = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const AnniversayPeople = ({state}) => {
    return ( 

        <MarginTopContainer>
            <HeadContainer>
                <Title>
                 25 Personas Clave
                </Title>
                <SubTitle>
                    Celebrando<br></br> el 25th Aniversario
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionText>
            <div>  
                <h1>ANDES Celebra sus 25 Años</h1>              
                <p>Como parte de las celebraciones de nuestro 25 aniversario, ANDES desea agradecer a todos los
que han contribuido al desarrollo institucional, la investigación colaborativa y el intercambio de
conocimientos de ANDES. Agradecemos el aliento de los socios a lo largo del camino y
esperamos continuar nuestras asociaciones a medida que avanzamos con la implementación de
Yachay Kuychi Pluriversity. Hay demasiadas personas para poder nombrarlas aquí, pero hemos
elegido destacar a 25 personas influyentes de los 25 años de historia de ANDES.</p>
              
            </div>
            </SectionText>

            <SectionText>
                <div>
                    <h1>Conoce a los cofundadores de ANDES</h1>
                    <p>
                        Alejandro Argumedo y Cesar Argumedo crecieron en el centro de los Andes en Perú con sus 4
                        hermanos. Después de la secundaria, Alejandro estudió agronomía en la Universidad McGill en 
                        Montreal, Canadá, y Cesar estudió zootecnología en la Universidad San Antonio Abad de Cusco,
                        Perú.
                    </p>

                    <p>
                        En 1995, Alejandro y Cesar registraron la Asociación para la Naturaleza y el Desarrollo
                        Sostenible (ANDES) en Cusco. Durante los primeros años, la organización funcionó con fondos
                        muy limitados y poco personal. Sin embargo, en este período se desarrollaron importantes
                        relaciones que los llevaron al establecimiento del icónico Parque de la Papa por 6 comunidades
                        indígenas con la guía de ANDES. Este trabajo continúa proporcionando lecciones importantes y
                        un modelo para gran parte del trabajo actual de las organizaciones.
                    </p>
                    <h3>Alejandro Argumedo</h3> 
                        <p>Recientemente dejó su puesto de Director en ANDES para ocupar
                            un puesto en la Fundación Swift. Continúa brindando liderazgo a ANDES como miembro
                            de la Junta Directiva.</p>

                    <h3>Cesar Argumedo</h3> 
                        <p>Continúa desempeñándose como Director de ANDES.</p>    
                    
                </div>
                
            </SectionText>


            <SectionImage>
                <SectionText>
                    <div>
                        <h1>El equipo directivo de ANDES también incluye dos asociadas de hace mucho tiempo.</h1>
                        
                        <h3>Tammy Stenner</h3> 
                            <p>Ha desempeñado un papel de apoyo a los directores de ANDES desde
                                sus inicios. También es coordinadora del Programa de Pluriversidad Yachay Kuychi..</p>

                        <h3>Carolina Ichillumpa</h3> 
                            <p>Se incorporó a ANDES en 2002 como contadora. Es la Jefa de
                                Administración y Finanzas.</p>    
                        
                    </div>
                    
                </SectionText>

                <Images src={groupAndes} />
            </SectionImage>
            
            <SectionText>
                <div>
                    <h1>La gestión cuidadosa y transparente de las finanzas y los activos de ANDES infunde
                        confianza en los socios. Este importante trabajo es apoyado actualmente por</h1>

                        <TextContainer>
                            <h3>Ruth Zuloaga<span> - Contadora</span></h3> 
                            <h3>Ysabel Moron <span> - Asistente de oficina</span></h3> 
                            <h3>Arascelly Heredia<span> - Especialista en TIC</span></h3> 
                            <h3>Enrque Granados<span> - Coordinador de Logística</span></h3> 
                        </TextContainer>
                </div>
            </SectionText>

            <SectionImage>
                <SectionText>

                    <div>
                        <h1>ANDES se enfoca en la investigación con y para comunidades indígenas. Nuestro personal
                            de campo incluye expertos con educación universitaria y poseedores de conocimientos
                            tradicionales, que aportan diversas perspectivas y experiencias a problemas complejos.
                            Estos expertos incluyen actualmente:</h1>

                            <TextContainer>
                                <h3>Jessica Villacorta<span> - Agrónoma</span></h3> 
                                <h3>Ricardo Pacco Chipa<span> - Coordinador de campo</span></h3> 
                                <h3>Mariano Sutta Apocusi<span> - Experto local</span></h3> 
                                <h3>Lino Manani Huarka<span> - Guardián de la Papa</span></h3> 
                                <h3>Aniceto Ccoyo Ccoyo<span> - Experto local</span></h3> 
                                <h3>Victor Oblitas<span> - Experto local </span></h3> 
                                <h3>Cass Madden<span> -  Investigadora</span></h3> 
                            </TextContainer>
                    </div>
                </SectionText>

                <Images src={groupLares}/>
            </SectionImage>

            <SectionText>

                <div>
                    <h1>La Junta Directiva tiene representación internacional, con personas bien calificadas y
                        experimentadas que brindan una guía y un apoyo invaluable a ANDES.</h1>

                        <TextContainer>
                            <h3>Carlos Loret de Mola<span> - Presidente de la Asociación Cusichaca, ex Ministro de Medio Ambiente en Perú.</span></h3> 
                            <h3>Carlos Amat y Leon<span> - Profesor de la Universidad del Pacífico, ex Ministro de Agricultura, Perú.</span></h3> 
                            <h3>Michel Pimbert<span> - Profesor de la Universidad de Coventry, Director Ejecutivo del Centro de Agroecología, Agua y Resiliencia</span></h3> 
                            <h3>Yiching Song,<span> - Investigadora principal, Centro Chino de Política Agrícola (CCAP), Profesor, Universidad Agrícola China</span></h3> 
                        </TextContainer>
                </div>
            </SectionText>
            
            <SectionImage>
                <SectionText>

                    <div>
                        <h1>ANDES cuenta con las contribuciones de una increíble red internacional de socios para el
                            apoyo financiero y técnico. Algunos ejemplos son:</h1>

                            <TextContainer>
                                <h3>Krystyna Swiderska<p> - Investigadora principal de agricultura y agrobiodiversidad en el
                                Instituto Internacional para el Medio Ambiente y el Desarrollo (IIED), es una
                                colaboradora de ANDES desde hace mucho tiempo, apoyando la recaudación de
                                fondos, la investigación colaborativa y las publicaciones.</p></h3> 
                                                            <h3>Sonja Swift<p> - Y la Fundación Swift han brindado un valioso apoyo a ANDES para el
                                desarrollo institucional, la investigación de acción y el desarrollo de políticas, y han
                                contribuido generosamente al establecimiento del nuevo sitio de Pluriversidad en el
                                Valle Sagrado.</p></h3> 
                                                            <h3>Gigi Manicad<p> - Brindó apoyo técnico y financiero profesional y reflexivo a ANDES
                                durante su tiempo en Oxfam-Novib, y esperamos continuar con la colaboración a
                                través de Pluriversity.</p></h3> 
                                
                            </TextContainer>
                    </div>
                </SectionText>

                <Images src={Krystyna} />
            </SectionImage>
            
            <SectionText>
                <div>
                    <h1>Con un activo Programa de Pasantías y Voluntariados, ANDES da la bienvenida a
                    estudiantes de todo el mundo, quienes realizan investigaciones sobre diversos temas,
                    incluyendo justicia social y ambiental, sistemas alimentarios indígenas, conservación de
                    la biodiversidad y ecoturismo.</h1>

                    <TextContainer>
                        <h3>Neus Marti<p> - (España) realizó una investigación de postgrado sobre los Mercados de
                            Trueque de Lares y ha realizado diversas consultorías con ANDES. Participará
                            activamente en el desarrollo de la programación en Yachay Kuychi Pluriversity.</p></h3> 
                        <h3>Ewen Dano <p> - (Francia) completó recientemente una investigación de posgrado sobre
                            cultivos infrautilizados en el valle de Lares.</p></h3> 
                        <h3>Melissa Loza<p> - (EE. UU.) Llegó como voluntaria en sus vacaciones de verano durante la
                            universidad.</p></h3> 
                        
                    </TextContainer>
                </div>
            </SectionText>

        </MarginTopContainer>
    );
}
 
export default connect(AnniversayPeople);