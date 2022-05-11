import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {styled} from "frontity";
import Image from "@frontity/components/image";
import logo from '../static/images/logoscaled.png';
import imgAndes from '../static/images/1.jpeg';
import imgPluriculturalidad from '../static/images/link3.jpg';
import Link from "./Link";
import LinkButtonHome  from './LinkButtonHome';
import SecondaryNavbarMobile from './SecondaryNavbarMobile';
 
const Navigation = styled.nav`
   display:-webkit-flex;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   flex: 1 0 100%; /**new line */
   height: 12vh;
   background-color: #fff;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
       -ms-flex-pack: justify;
           justify-content: space-between;
   -webkit-box-align: center;
   -webkit-align-items: center;
       -ms-flex-align: center;
           align-items: center;
   border-bottom: 2px solid #33333320;
   margin: 0 auto;
   padding: 0 auto;
   position: fixed;
   top: 6vh;
   left:0;
   width: 100%;
   z-index: 3;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    margin-bottom: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
`

const Navbox = styled.div`

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  /*height: 100%;*/

  flex: 1 0 100%; /**new line */
  -webkit-box-pack: center;
      -ms-flex-pack: center;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
  -webkit-align-items: center;
          align-items: center;
  margin: 0 1rem 0 0;
  height: 12vh;
  
  @media (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
    -webkit-flex-direction: column;
            flex-direction: column;
    position: fixed;
    height: 100%;
    width: 100%;
    /**max-height: 100%;*/
    -webkit-box-pack: start;
        -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
    -webkit-align-items: flex-start;
            align-items: flex-start;
    overflow-y: auto;
    background-color: #fff;
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    top: 11vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  -webkit-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
              -ms-grid-row-align: center;
          align-self: center;
  position: relative;
  -webkit-transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  -ms-transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  ::before {
    -webkit-transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        -ms-transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    -webkit-transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        -ms-transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

// const MobileBox = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     flex: 1 0 100%; /**new line */
//     width: 100%;

    
//   }
// `

const Button = styled.button`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 1rem 0rem 1rem 1rem;
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border-style: none;
    border-color: transparent;
    border-width: 0;
  
    @media(min-width: 768px) {
        margin: 0rem 1rem 0 1rem;
        font-size: 1.3rem;
        color: #000;
    }
`;

const ButtonContact = styled.div `

  @media(max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    
    a {
        text-decoration: none;
        background-color: #f07723;
        text-transform: uppercase;
        color: #fff;
        padding: 1.2rem 2.2rem;
        border-radius: 10px;
        text-align: center;
        font-weight: 700;
        font-size: 1.2rem;

        &:hover {
            background-color: #F05523;
            transition: all 0.4s;
        }
    }
    
  }

`;

export const Border = styled.div`
  
  content : "";
  height  : 1px;
  width   : 100vw;  /* or 100px */
  border-bottom: 1px solid #D3D3D3;
  margin: 0;
  
  @media (min-width: 768px) {
      display: none;
  }
`;


const Menu =  () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  
  const [openAbout, setOpenAbout] = useState(false);
  const [openAboutMobile, setOpenAboutMobile] = useState(false);
  
  const [openResearch, setOpenResearch] = useState(false);
  const [openResearchMobile, setOpenResearchMObile] = useState(false);
  
  return (
    <>
    <Navigation>
      
      <Link href="/"><Image src={logo} height="60" width="60" alt="logo" /></Link>
 
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>  
    
      

      {navbarOpen ? (
        <>
             
        <Navbox>
           
        <SecondaryNavbarMobile
            navOpen = {navbarOpen}
            setNavOpen = {setNavbarOpen}
        />
            <Border />

            <Button onClick={() => setOpenAboutMobile(!openAboutMobile)}>
              Andes
            </Button>
            <Border />
              {openAboutMobile ? 
            
                  <Dropdown
                    navOpen = {navbarOpen}
                    setNavOpen = {setNavbarOpen}
                    open = {openAboutMobile}
                    setOpen = {setOpenAboutMobile}
                    options={["Who We are?", "Philosophy", "People"]}
                    secondTitle = {'What We Do?'}
                    options2={["Biocultural Territories", "Advocacy and Politics"]}
                    thirdTitle = {["Where We Work?"]}
                    options3={["Potato Park - Pisac", "Chalakuy Park - Lares", "Spiritual Park - Vilcanota", "International Programs and Networks"]}
                  /> 
        

                :null
              }
        

            <Button onClick={() => setOpenResearchMObile(!openResearchMobile)}>
              Pluriversity
            </Button>
            <Border />
              {openResearchMobile ?
              
                  <Dropdown
                    navOpen = {navbarOpen}
                    setNavOpen = {setNavbarOpen}
                    open = {openResearchMobile}
                    setOpen = {setOpenResearchMObile}
                    options = {["Yachay Kuychi", "Who We Are"]}
                    secondTitle = {'What We Do?'}
                    options2 = {["Courses", "Intership and Volunteering", "Exchanges"]}
                    thirdTitle = {"Utilities"}
                    options3 = {["Toolkit"]}
                  />
                  
                  : null
              } 

          <Button onClick = {() => setNavbarOpen(!navbarOpen)}>
              <Link href="/publications">Publications</Link>
          </Button>
          <Border />

          <Button onClick = {() => setNavbarOpen(!navbarOpen)}>
            <Link href= "/news">News</Link>
          </Button> 
          <Border />
          
          <Button onClick = {() => setNavbarOpen(!navbarOpen)}> 
            <Link href= "/events">Events</Link>
          </Button> 
          <Border />

          <ButtonContact onClick = {() => setNavbarOpen(!navbarOpen)}>
             <Link href="/stayintouch">Contact</Link>
          </ButtonContact>
  
        </Navbox>
        
        </>

      ) : (
        <Navbox open>
          <Button onClick={() => setOpenAbout(!openAbout)}>ANDES</Button> 
          <Button onClick={() => setOpenResearch(!openResearch)}>PLURIVERSITY</Button> 
          <Button><Link href="/publications">PUBLICATIONS</Link></Button> 
          <Button><Link href= "/news">NEWS</Link></Button> 
          <Button> <Link href= "/events">EVENTS</Link></Button> 

          <LinkButtonHome href="/stayintouch">CONTACT</LinkButtonHome>
        </Navbox>
  
      )}
      

    </Navigation>
   
    {openAbout ? 
      <Dropdown
        open = {openAbout}
        setOpen = {setOpenAbout}
        options={["Who we are?", "Philosophy", "People"]}
        secondTitle = {'What We Do?'}
        options2={["Biocultural Territories", "Advocacy and Politics"]}
        thirdTitle = {["Where We Work?"]}
        options3={["Potato Park - Pisac", "Chalakuy Park - Lares", "Spiritual Park - Vilcanota", "International Programs and Networks"]}
        ImageNav = {imgAndes}
      />  : null
    }

    {openResearch ? 
      <Dropdown
        open = {openResearch}
        setOpen = {setOpenResearch}
        options = {["Yachay Kuychi", "Who We Are"]}
        secondTitle = {'What We Do?'}
        options2 = {["Courses", "Intership and Volunteering", "Exchanges"]}
        thirdTitle =  {"Utilities"}
        options3 = {["Toolkit"]}
        ImageNav = {imgPluriculturalidad}
      />  : null
    }
  </>
  );
}

export default Menu;