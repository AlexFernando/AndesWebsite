import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';


const ComingSoon = ({state}) => {
    return ( 
    
        <MarginTopContainer>
            <Title>Página en Construcción</Title> 
            <Separator></Separator>       
            <SubTitle>Estamos trabajando en esta sección. </SubTitle>

            <p>Gracias.</p>
        </MarginTopContainer> 
    
    );
}
 
export default connect(ComingSoon);