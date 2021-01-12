import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Link from './Link';


const ContainerNav = styled.nav`

    display: flex;
    background-color: #44841a;
    justify-content: space-evenly;
    align-items: center;
    top:0;
    color: #fff;
    z-index: 3;
    position: relative;
    width: 100%;
    height: 8vh;

    @media (min-width: 768px) {
        display: none;
    }

    a {
        display: flex;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        
        
        span {      
            font-size: 1rem;
        }
    }

    
`

const SecondaryNavbarMobile = ({state, actions, setNavOpen, navOpen}) => {

    let myLink = state.router.link;
    let linkSpanish = "/es"+ myLink;

    return ( 

        <ContainerNav>
        
                <Link href={myLink}>ENGLISH</Link>
                <Link href={linkSpanish}>ESPAÑOL</Link>
 
                <a href="/searchbar">
                    <span>Search</span>
                    <FontAwesomeIcon css={css`font-size: 1.2rem;`}icon={faSearch}/>
                </a> 
   


        </ContainerNav>

     );
}
 
export default connect(SecondaryNavbarMobile);