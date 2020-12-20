import React, { useEffect, useState, useRef } from "react";
import {css, styled} from "frontity";
import {Border} from './Menu';
import Link from "./Link";
import SecondaryNavbar from './SecondaryNavbar';


const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;
  z-index: 3;
 

 
  @media(min-width: 768px) {
    position: fixed;
    top: 18vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
`

export const VerticalBorder = styled.div `
  
  @media(min-width: 768px){ 
    border-left: 1px solid #808080;
    margin-left: 2rem;
  }
`

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-left: 0;

  @media(min-width: 768px){ 
    padding-left: 4rem;
  }
`

const ListStyle = styled.li`
  list-style: none;
  font-weight: 300;
  margin: 1rem 0 1rem 2rem;

  @media(min-width: 768px){
    margin: 0;
  }

  &:first-of-type {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  
`
const ImageStyle = styled.img`
  
  display:none;
  
  @media(min-width: 768px) {
      display: flex;
      height:140px; 
      width: 220px;
      padding: 2rem;
      margin-left: 3rem;
  }
`

const ButtonStyled = styled.button`
    background-color: #fff;
    border: none;
    color: #000;
    font-size: 1rem;
`;

const Dropdown = ({ navOpen, setNavOpen, open, setOpen, options=null, secondTitle =null, options2 = null, ImageNav = null, thirdTitle =null, options3 = null}) => {

  let titleOptions = options.shift();

  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
  
    setOpen(false);
    
  };
   
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (

    <DropDownBox ref={node}>
      
      {open && (
        <>
          <ImageStyle src={ImageNav} />

          <VerticalBorder>
            <ListContainer>

              <ListStyle key={titleOptions}>
                    {titleOptions}
              </ListStyle>
         
              {options.map(opt => (
                    <>
                      <ListStyle key={opt}>
                        <ButtonStyled onClick={() => {setOpen(false); setNavOpen(false);}}><Link href={`/${opt.toLowerCase().replace(/\s/g, "")}`}>{opt}</Link></ButtonStyled>
                      </ListStyle>
                      <Border />
                    </>
                ))}
            </ListContainer>
          </VerticalBorder>
          
                {options2 ? 
                  <VerticalBorder>
                    <ListContainer>
                              <ListStyle key={secondTitle}>
                                {secondTitle}
                              </ListStyle>
                        {options2.map(opt2 => (
                              <>
                              <ListStyle key={opt2}>
                                <ButtonStyled onClick={() => {setOpen(false); setNavOpen(false);}}>
                                  <Link href={`/${opt2.toLowerCase().replace(/\s/g, "")}`}>{opt2}</Link>  
                                </ButtonStyled>                                
                              </ListStyle>
                              <Border />
                              </>
                        ))}
                    </ListContainer>
                    
                  </VerticalBorder> 
                
                  : null  
                }

                {options3 ? 
                  <VerticalBorder>
                    <ListContainer>
                              <ListStyle key={thirdTitle}>
                                {thirdTitle}
                              </ListStyle>
                        {options3.map(opt3 => (
                              <>
                              <ListStyle key={opt3}>
                                <ButtonStyled onClick={() => {setOpen(false); setNavOpen(false);}}>
                                  <Link href={`/${opt3.toLowerCase().replace(/\s/g, "")}`}>{opt3}</Link>  
                                </ButtonStyled>                                
                              </ListStyle>
                              <Border />
                              </>
                        ))}
                    </ListContainer>
                    
                  </VerticalBorder> 
                
                  : null  
                }
        </>  
      )}
    </DropDownBox>
  );
};

export default Dropdown;
