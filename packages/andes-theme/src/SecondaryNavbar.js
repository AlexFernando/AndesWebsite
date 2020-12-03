import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const ContainerNav = styled.nav`
  display: flex;
  width: 100%;
  height: 4vh;
  background-color: #44841a;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  color: #fff;

  div{
    cursor: pointer;
  }
  p {
      margin-left: 2rem;
  }

  span {
      margin-right: 1rem;
  }


  @media (max-width: 768px) {
    display: none;
  }


`

const SecondaryNavbar = ({actions}) => {

    const handleClick = e => {

        e.preventDefault();

        actions.router.set("/searchbar");
    }

    return ( 

        <ContainerNav>
            <p>Algún Slogan de la organización</p>

            <div onClick={handleClick}>
                <span>Search</span>
                <FontAwesomeIcon css={css`font-size: 1.2rem; margin-right: 2rem;`}icon={faSearch}/>
            </div>
        </ContainerNav >

     );
}
 
export default connect(SecondaryNavbar);