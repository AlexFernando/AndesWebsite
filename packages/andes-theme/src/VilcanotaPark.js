import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import imgPluriculturalidad from './static/images/link3.jpg';
import vilcanotaFirst from './static/images/vilcanota1.jpg'
import vilcanotaSecond from './static/images/vilcanota2.jpg'


const VilcanotaPark = () => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Parque Espiritual de Vilcanota
                </Title>
                <SubTitle>
                    Hotspot de biodiversidad<br></br>Cultura Milenaria
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <p>
                ¿Cuál es la relación entre la espiritualidad, un ecosistema saludable y la lucha contra la pobreza? En las provincias de Canchis, Quispicanchi y Paucartambo del departamento de Cusco, las comunidades indígenas locales creen que la incorporación de las prácticas espirituales debe ser un aspecto fundamental de las políticas de protección y de desarrollo que las afecten.<br></br><br></br>

                Ubicado en una región reconocida como hotspot de biodiversidad y hogar de una cultura milenaria y poco influenciada por el exterior como la de los Q’eros, las comunidades han decidido enfrentar la erosión de su cultura y su medio ambiente, estableciendo un área especial de conservación. El Parque Espiritual Vilcanota está dedicado a preservar en su integridad los valores espirituales y ecológicos de los pueblos Quechua. Este es el primer Sitio Natural Sagrado del Perú, un modelo que reconoce y promueve los valores Quechua reconociendo su importancia per se y para la conservación y al uso sostenible de la biodiversidad.<br></br><br></br>

                    Utilizando una perspectiva de sistemas, este proyecto busca incidir en las relaciones de los sistemas alimentarios a nivel local y  mundial y promueve la participación activa de la población rural pobre para la gobernabilidad política inclusiva. La atención se centra en el conocimiento y las experiencias de los pueblos indígenas y las comunidades de pequeños agricultores como actores claves para identificar los retos que plantea el cambio climático y crear respuestas adecuadas.
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={vilcanotaFirst} />

                        <h3>El Carácter Sagrado Del Área</h3>

                        <span>
                            El paisaje natural de la región Vilcanota ha sido protegido por mucho tiempo por las comunidades mismas a través de sus prácticas culturales y su incorporación en los sistemas cosmológicos que otorgan a elementos biológicos significado espiritual y simbólico. Sitios de valor espiritual (como grutas, montañas, ríos, lagos, hasta ecosistemas enteros) han permanecido en su estado natural o casi natural debido a las restricciones de acceso que estas creencias implican. Así, los sitios naturales sagrados, con poca inferencia por parte de la actividad humana, proveen santuarios para especies amenazadas y podrían servir como piscinas genéticas potenciales, para recuperar ecosistemas degradados.
                        </span>

                    </Card>


                    <Card>
                        <img src={vilcanotaSecond} />

                        <h3>Un Sitio Natural Sagrado</h3>

                        <span>
                            Partiendo del hecho que los ecosistemas no pueden ser entendidos, conservados ni manejados sin el mantenimiento de las culturas que las han modificado, creado y recreado y como respuesta a las amenazas y cambios externos, en día 6 de Diciembre de 2004, las comunidades Quechua de Q’eros y Ausangate crearon el Parque Espiritual Vilcanota como el primer Sitio Natural Sagrado del Perú. Este modelo de protección reconoce que la diversidad biológica y cultural se halla en una relación de mutua dependencia y reforzamiento, y que ambos son esenciales para la continuidad tanto de los sistemas sociales como ecológicos. Esta iniciativa, liderada por las comunidades mismas, está siendo implementada con ayuda de agencias gubernamentales como el CONAM y el INRENA.
                        </span>

                    </Card>

                    <Card>
                        <img src={imgPluriculturalidad} />

                        <h3> un Área de Patrimonio Bio-cultural Indígena</h3>

                        <span>
                        Así mismo, cuenta con el apoyo de organizaciones internacionales como el IIED (Internacional Institute for Environment and Development) del Reino Unido. Su manejo se halla en manos del comité Pro-Parque Espiritual Vilcanota con apoyo de la Asociación ANDES. Este manejo se basa completamente en sistemas de gobernanza local. Las comunidades del Parque forman la Asamblea General del Comité PRO – PARQUE ESPIRITUAL DEL VILCANOTA, que es la instancia de toma de decisiones. Cada comunidad es representada en el Comité por sus respectivos Presidentes Comunales. Los presidentes comunales más el Alcalde del Centro Poblado Menor de Tinki eligen a la Junta Directiva del Comité Pro Parque Espiritual que se constituye en la instancia de gestión, cuyo personería jurídica está inscrita en los registros públicos de Cusco. Esta organización fue fundada un 31 de enero del año 2003 en el Centro Poblado de Tinki con la participación de más 150 delegados campesinos y su primer presidente es actualmente el Alcalde Campesino del mencionado centro poblado.
                        </span>

                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(VilcanotaPark);