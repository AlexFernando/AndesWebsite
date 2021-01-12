import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Link from './Link';


const ContainerNav = styled.nav`

  display: flex;
  width: 100%;
  height: 6vh;
  background-color: #44841a;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  color: #fff;
  z-index: 3;


  @media (max-width: 768px) {
    display: none;
  }

    p {
        font-style: italic;
        margin-left: 2rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;


        a {
            display: flex;
            cursor: pointer;
            text-decoration: none;
            color: #fff;
            margin-right: 2rem;


            span {      
                margin-right: 1rem;
                font-size: 1.2rem;
    
            }
        }

    }
`

const SecondaryNavbar = ({state, actions, setNavOpen, navOpen}) => {

    let myLink = state.router.link;
    let linkSpanish = "/es"+ myLink;
    
    return ( 

        <ContainerNav>
            <p>"Together towards to Sumaq Kawsay"</p>

            <div>
                <Link href={myLink}>ENGLISH</Link>
                <Link href={linkSpanish}>ESPAÑOL</Link>
                
                <a href="/searchbar">
                    <span>Search</span>
                    <FontAwesomeIcon css={css`font-size: 1.2rem;`}icon={faSearch}/>
                </a>
            </div>
                
        </ContainerNav >

     );
}
 
export default connect(SecondaryNavbar);