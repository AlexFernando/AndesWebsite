import React from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';


const Politica = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Incidencias Política
                </Title>
                <SubTitle>
                    Transgénicos <br></br> Biopiratería
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>
        </MarginTopContainer>
    );
}
 
export default connect(Politica);