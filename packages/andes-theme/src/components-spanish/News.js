import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {dataNews} from '../data/dataNews';
import {PostStyled} from './SearchBar';

const News = () => {



    return ( 

        <MarginTopContainer>
            <HeadContainer>
                <Title>Noticias</Title>
                <Separator></Separator>
                <SubTitle>Información Relevante<br></br> Historias Reales</SubTitle>
                
            </HeadContainer>


            {    
                dataNews.map(item => (
                    <PostStyled>
                        <a href={`${item.url}`} target="_blank" rel="noopener">
                            <img src={item.urlImage}/>
                            <div>
                                <h3>{item.titulo}</h3>
                                <p>{item.content}</p>
                                <strong>Fecha:</strong>
                                &nbsp;&nbsp;
                                <span>{item.fecha}</span>
                            </div>
                        </a>
                    </PostStyled>
                ))
            }
        </MarginTopContainer>


    );
}
 
export default connect(News);