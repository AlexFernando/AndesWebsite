import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


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

  a{
    cursor: pointer;
    text-decoration: none;
    color: #fff;    
  }
  p {
      font-style: italic;
      margin-left: 2rem;
  }

  span {
      margin-right: 1rem;
  }


  @media (max-width: 768px) {
      position: relative;
  }
`

const SecondaryNavbar = ({actions, setNavOpen, navOpen}) => {

    const handleClick = e => {

        e.preventDefault();
        actions.router.set("/searchbar");

    }

    return ( 

        <ContainerNav>
            <p>"Juntos hacia el Sumaq Kawsay"</p>

            <a href="/searchbar">
                <span>Search</span>
                <FontAwesomeIcon css={css`font-size: 1.2rem; margin-right: 2rem;`}icon={faSearch}/>
            </a>
        </ContainerNav >

     );
}
 
export default connect(SecondaryNavbar);