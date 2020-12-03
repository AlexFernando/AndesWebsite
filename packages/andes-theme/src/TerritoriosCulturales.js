import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';


const TerritoriosCulturales = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Territorios Culturales
                </Title>
                <SubTitle>
                    Desarrollo endógeno <br></br> Conservación de la biodiversidad
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>
        </MarginTopContainer>
    );
}
 
export default connect(TerritoriosCulturales);