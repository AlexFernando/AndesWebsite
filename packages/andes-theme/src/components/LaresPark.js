import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import parqueLaresbiodiversidad from '../static/images/parquemaiz.jpg';
import parqueLaresmercados from '../static/images/parquemaiz2.jpg';
import parqueLaresCocinando from '../static/images/parquemaiz3.png';

const LaresPark = () => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Parque de Maíz - Lares
                </Title>
                <SubTitle>
                    Agro biodiversidad<br></br>Mercados de Trueque
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <p>
                    Lares es un distrito de Perú ubicado al lado del Valle Sagrado de los Incas. El valle de Lares abarca un territorio que se extiende desde la cuenca del Amazonas hasta las montañas de montaña, con una altitud de aproximadamente 1000 m.s.n.m a casi 5000 m.s.n.m. La geografía altamente variada del área imparte una amplia variedad de hábitats, lo que lleva a una notable diversidad de especies de plantas, tanto cultivadas como silvestres. A pesar de esta rica diversidad de especies, Lares es uno de los distritos más pobres del Perú y su población lucha con algunos de los porcentajes más altos de problemas de salud relacionados con la nutrición en el país.<br></br><br></br>

                    El proyecto en Lares se centra en escalonamiento, lo que se refiere a extender, replicar, adaptar y mantener políticas, proyectos y programas exitosos en diferentes partes en un espacio y tiempo determinados para tener mayor impacto. En el caso de Lares, el escalonamiento es del manejo de la biodiversidad asociada a los conocimientos ancestrales y leyes consuetudinarias tomando aprendizajes obtenidos en el Parque de la Papa y adaptándolos a la realidad de Lares. En Lares hay más amplitud de cultivos locales por sus diversos pisos ecológicos lo que permite recabar datos sobre el impacto del cambio climático y la adaptabilidad de diferentes cultivos nativos, incluyendo maíz, haba, café, cacao, palta y naranja, además de las variedades de la papa.<br></br><br></br>

                    Utilizando una perspectiva de sistemas, este proyecto busca incidir en las relaciones de los sistemas alimentarios a nivel local y  mundial y promueve la participación activa de la población rural pobre para la gobernabilidad política inclusiva. La atención se centra en el conocimiento y las experiencias de los pueblos indígenas y las comunidades de pequeños agricultores como actores claves para identificar los retos que plantea el cambio climático y crear respuestas adecuadas.
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={parqueLaresbiodiversidad} />

                        <h3>Uso de biodiversidad local para enfrentar anemia</h3>

                        <span>
                        En Lares, estamos investigando el potencial de las especies silvestres y subutilizadas para mejorar la nutrición comunitaria. Lares tiene una de las mayores incidencias de anemia de cualquier región del Perú, por lo que nuestros técnicos locales están trabajando arduamente para mantener saludables a sus comunidades.
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2020/01/Neglected-and-Underutilized-Species-for-improved-diets_Briefing-note.pdf" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>


                    <Card>
                        <img src={parqueLaresmercados} />

                        <h3>Mercados del Trueque en Lares</h3>

                        <span>
                            Trueque, o intercambio, ha sido una estrategia importante para diversificar las dietas y garantizar la seguridad alimentaria en Perú durante siglos, pero la globalización y las políticas neoliberales han llevado a la desaparición generalizada de los mercados de trueque. Sin embargo, en el Valle de Lares, la tradición del trueque sigue siendo fuerte, y estamos trabajando activamente para conservar estos mercados locales.
                        </span>

                        <a href="https://ddd.uab.cat/search?f=title&p=La%20Multidimensionalidad%20de%20los%20sistemas%20locales%20de%20alimentaci%C3%B3n%20en%20los%20Andes%20peruanos%20los%20chalayplasa%20del%20Valle%20de%20Lares%20%28Cusco%29%20/&sc=1&ln=ca" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>

                    <Card>
                        <img src={parqueLaresCocinando} />

                        <h3>Cocinando con la agrobiodiversidad de Lares</h3>

                        <span>
                            Este libro de cocina sirve como un recurso para los miembros de la comunidad en Lares y como una fuente de información e inspiración para las comunidades de todo el Perú. ¡El enfoque en ingredientes locales, tanto cultivados como silvestres, crea recetas innovadoras, saludables y deliciosas! 
                        </span>

                        <a href="https://oxfam.app.box.com/s/bvmc0byvzeklexqbo8l4jz3nyvjg8rhh" target="_blank" rel="noopener" >LEER MAS</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(LaresPark);