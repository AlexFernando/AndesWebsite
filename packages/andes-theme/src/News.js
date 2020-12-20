import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';
import {dataNews} from './data/dataNews';
import {PostStyled} from './SearchBar';


const News = () => {



    return ( 

        <MarginTopContainer>
            <HeadContainer>
                <Title>Noticias</Title>
                    <SubTitle>Información Relevante<br></br> Historias Reales</SubTitle>
                <Separator></Separator>
            </HeadContainer>


            {    
                dataNews.map(item => (
                    <PostStyled>
                        <h3>{item.titulo}</h3>
                        <p>{item.content}</p>
                        <div>
                            <strong>Fecha:</strong>
                            &nbsp;&nbsp;
                            {item.fecha}
                        </div>
                    </PostStyled>
                ))
            }
        </MarginTopContainer>


    );
}
 
export default connect(News);