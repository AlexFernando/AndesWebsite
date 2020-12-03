import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';


const News = () => {

    return ( 

        <MarginTopContainer>
            <HeadContainer>
                <Title>Noticias</Title>
                    <SubTitle>Información Relevante<br></br> Historias Reales</SubTitle>
                <Separator></Separator>
            </HeadContainer>
        </MarginTopContainer>
    );
}
 
export default connect(News);