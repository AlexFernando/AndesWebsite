import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, Separator, MarginTopContainer} from './Filosofia';
import {SectionText} from './HomePage';
import RepoAnniversaryPublications from './RepoAnniversaryPublications';

const AnniversaryPublications = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                 25 Publicaciones
                </Title>
                <Separator></Separator>
            </HeadContainer>

            <SectionText>
            <div>  
                <h1>ANDES Celebra sus 25 Años</h1>              
                <p>Como parte de las celebraciones de nuestro 25 aniversario, nos gustaría compartir algunos de los
resultados de nuestras investigaciones a través de publicaciones que, por supuesto, solo son posibles
gracias a las importantes contribuciones de nuestros socios. Le recomendamos consultar las
numerosas publicaciones en el sitio web de ANDES. Si no está familiarizado con el trabajo de
ANDES y se pregunta por dónde empezar, aquí hay 25 sugerencias.</p>
<h1>25 Publications</h1>
                <p>
                    Las publicaciones de ANDES son a menudo el resultado de investigaciones colaborativas
                    con y para las comunidades indígenas de los Andes.
                </p> 
              
            </div>
            </SectionText>

            
            <RepoAnniversaryPublications />
        </MarginTopContainer>
     );
}
 
export default connect(AnniversaryPublications);

