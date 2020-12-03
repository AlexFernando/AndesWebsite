import React from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';

const Eventos = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Eventos
                </Title>
                <SubTitle>
                    Participa con nosotros
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>
        </MarginTopContainer>
    );
}
 
export default connect(Eventos);