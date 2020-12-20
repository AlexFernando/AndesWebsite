import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {css, styled} from "frontity";
import LinkButton from './LinkButton';
import Image from "@frontity/components/image";
import logo from './static/images/logoscaled.png';
import { ButtonAction } from './bgImage';
import imgAndes from './static/images/1.jpeg';
import imgPluriculturalidad from './static/images/link3.jpg';
import imgNoticias from './static/images/link4.jpeg';
import Link from "./Link";
import SecondaryNavbar from './SecondaryNavbar';
 
const Navigation = styled.nav`
  display: flex;
  height: 12vh;
  background-color: #fff;
  justify-content: space-between;
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
    height: 18vh;
    position: fixed;
    top: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 0;
  

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 18vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative; 
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
 
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const MobileBox = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    top: 12vh;
    z-index: 3;
  }
`

const Button = styled.a`
    display: flex;
    margin: 1rem 0rem 1rem 1rem;
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
    cursor: pointer;
   
    @media(min-width: 768px) {
        margin: 0rem 1rem 0 1rem;
        font-size: 1.3rem;
        color: #000;
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
  
  const [openEventos, setOpenEventos] = useState(false);
  const [openEventosMobile, setOpenEventosMobile] = useState(false);

  return (
    <>
    <Navigation>
      
      <Link href="/"><Image src={logo} height="60" width="60" /></Link>
 
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>  
    
      

      {navbarOpen ? (
        <>
             
        <Navbox>
           
        <SecondaryNavbar
            navOpen = {navbarOpen}
            setNavOpen = {setNavbarOpen}
        />
            <Border />
            <Button onClick={() => setOpenAboutMobile(!openAboutMobile)}>
            < Link href="#">Andes</Link>
            </Button>
            <Border />
              {openAboutMobile ? 
                <MobileBox>
                  <Dropdown
                    navOpen = {navbarOpen}
                    setNavOpen = {setNavbarOpen}
                    open = {openAboutMobile}
                    setOpen = {setOpenAboutMobile}
                    options={["Quiénes somos?", "Filosofia", "Personas"]}
                    secondTitle = {'Que Hacemos?'}
                    options2={["Territorios Bioculturales", "Incidencias Políticas"]}
                    thirdTitle = {["Dónde trabajamos?"]}
                    options3={["Parque de la Papa - Pisac", "Parque de Maíz - Lares", "Parque Espiritual - Vilcanota", "Programas y Redes Internacionales"]}
                  /> 
                </MobileBox>

                :null
              }
        

            <Button onClick={() => setOpenResearchMObile(!openResearchMobile)}>
              <Link href="#">Pluriversidad</Link>
            </Button>
            <Border />
              {openResearchMobile ?
                <MobileBox>
                  <Dropdown
                    navOpen = {navbarOpen}
                    setNavOpen = {setNavbarOpen}
                    open = {openResearchMobile}
                    setOpen = {setOpenResearchMObile}
                    options = {["Yachay Kuychi", "Quienes somos?"]}
                    secondTitle = {'Que Hacemos?'}
                    options2 = {["Cursos", "Pasantías", "Intercambios"]}
                    thirdTitle = {"Utilidades"}
                    options3 = {["Caja de herramientas"]}
                  />
                  <Border />
                </MobileBox> 
                  : null
              } 

          <Button onClick = {() => setNavbarOpen(!navbarOpen)}>
              <Link href="/publicaciones">Publicaciones</Link>
          </Button>
          <Border />

          <Button onClick = {() => setNavbarOpen(!navbarOpen)}>
            <Link href= "/noticiasrelevantes">Noticias</Link>
          </Button> 
          <Border />
          
          <Button onClick = {() => setNavbarOpen(!navbarOpen)}> 
            <Link href= "/eventos">Eventos</Link>
          </Button> 
          <Border />

          <ButtonAction onClick = {() => setNavbarOpen(!navbarOpen)}>
             <LinkButton href="/">Contacto</LinkButton>
          </ButtonAction>
              <br></br>
              <br></br>
              <br></br>  
              <br></br>     
        </Navbox>
        
        </>

      ) : (
        <Navbox open>
          <Button onClick={() => setOpenAbout(!openAbout)}>ANDES</Button> 
          <Button onClick={() => setOpenResearch(!openResearch)}>PLURIVERSIDAD</Button> 
          <Button><Link href="/publicaciones">PUBLICACIONES</Link></Button> 
          <Button><Link href= "/noticiasrelevantes">NOTICIAS</Link></Button> 
          <Button> <Link href= "/eventos">EVENTOS</Link></Button> 
          <ButtonAction > <LinkButton href="/">CONTACTO</LinkButton></ButtonAction>

        </Navbox>
  
      )}
      

    </Navigation>
   
    {openAbout ? 
      <Dropdown
        open = {openAbout}
        setOpen = {setOpenAbout}
        options={["Quiénes somos?", "Filosofia", "Personas"]}
        secondTitle = {'Que hacemos?'}
        options2={["Territorios Bioculturales", "Incidencias Políticas"]}
        thirdTitle = {["Dónde trabajamos?"]}
        options3={["Parque de la Papa - Pisac", "Parque de Maíz - Lares", "Parque Espiritual - Vilcanota", "Programas y Redes Internacionales"]}
        ImageNav = {imgAndes}
      />  : null
    }

    {openResearch ? 
      <Dropdown
        open = {openResearch}
        setOpen = {setOpenResearch}
        options = {["Yachay Kuychi", "Quienes somos?"]}
        secondTitle = {'Que Hacemos?'}
        options2 = {["Cursos", "Pasantías", "Intercambios"]}
        thirdTitle =  {"Utilidades"}
        options3 = {["Caja de herramientas"]}
        ImageNav = {imgPluriculturalidad}
      />  : null
    }

    {openEventos ? 
      <Dropdown
        open = {openEventos}
        setOpen = {setOpenEventos}
        options={["Publicaciones","Bibliografía", "Videos", "Fotos"]}
        ImageNav = {imgNoticias}
      />  : null
    }
  </>
  );
}

export default Menu;