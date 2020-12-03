import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {css, styled} from "frontity";
import LinkButton from './LinkButton';
import Image from "@frontity/components/image";
import logo from './images/logo.png';
import { ButtonAction } from './bgImage';
import imgAndes from './images/1.jpeg';
import imgResearch from './images/link2.jpg';
import imgPluriculturalidad from './images/link3.jpg';
import imgNoticias from './images/link4.jpeg';
import Link from "./Link";

 
const Navigation = styled.nav`
  display: flex;
  height: 10vh;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 auto;
  position: fixed;
  top: 4vh;
  left:0;
  width: 100%;

  @media (max-width: 768px) {
    height: 12vh;
    position: absolute;
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
  justify-content: space-between;
  align-items: center;
  

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
    top: 12vh;
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
  }
`

const Button = styled.a`
    display: flex;
    margin: 1rem 0rem 1rem 1rem;
    font-size: 1.2rem;
    color: #61a534;
    text-decoration: none;
   
    @media(min-width: 768px) {
        margin: 0rem 2rem 0 2rem;
        font-size: 1.5rem;
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

export const EmptyContent = styled.div`
  content : "";
  height  : 1px;
  width   : 100vh;  /* or 100px */
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
        
            <Border />
            <Button onClick={() => setOpenAboutMobile(!openAboutMobile)}>
              Andes
            </Button>
            <Border />
              {openAboutMobile ? 
                <MobileBox>
                  <Dropdown
                    open = {openAboutMobile}
                    setOpen = {setOpenAboutMobile}
                    options={["Quiénes somos?", "Filosofia", "Personas"]}
                    secondTitle = {'Que Hacemos?'}
                    options2={["Territorios Bioculturales", "Investigación", "Incidencias Políticas"]}
                    thirdTitle = {["Dónde trabajamos?"]}
                    options3={["Parque de la Papa - Pisac", "Parque de Maíz - Lares", "Parque Espiritual - Vilcanota", "Programas y Redes Internacionales"]}
                  /> 
                </MobileBox>

                :null
              }
        

            <Button onClick={() => setOpenResearchMObile(!openResearchMobile)}>
              Pluriversidad
            </Button>
            <Border />
              {openResearchMobile ?
                <MobileBox>
                  <Dropdown
                    open = {openResearchMobile}
                    setOpen = {setOpenResearchMObile}
                    options = {["Yachay Kuychi", "Quiénes somos?"]}
                    secondTitle = {'Que Hacemos?'}
                    options2 = {["Cursos", "Pasantías", "Intercambios"]}
                    thirdTitle = {"Utilidades"}
                    options3 = {["Caja de herramientas"]}
                  />
                  <Border />
                </MobileBox> 
                  : null
              } 

            <Button onClick={() => setOpenEventosMobile(!openEventosMobile)}>
              Publicaciones
            </Button>
            <Border />
              {openEventosMobile ? 
                <MobileBox>
                  <Dropdown
                    open = {openEventosMobile}
                    setOpen = {setOpenEventosMobile}
                    options={["Publicaciones","Bibliografía", "Videos", "Fotos"]}
                  />
                  
                </MobileBox>
                  : null
              } 

          <Button href= "/noticiasrelevantes"> Noticias</Button> 
          <Button href= "/eventos"> Eventos</Button> 

          <ButtonAction >
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
      
          <Button onClick={() => setOpenAbout(!openAbout)}>Andes</Button> 
          <Button onClick={() => setOpenResearch(!openResearch)}>Pluriversidad</Button> 
          <Button onClick={() => setOpenEventos(!openEventos)}>Publicaciones</Button> 
          <Button href= "/noticiasrelevantes"> Noticias</Button> 
          <Button href= "/eventos"> Eventos</Button> 
          <ButtonAction > <LinkButton href="/">Contacto</LinkButton></ButtonAction>

        </Navbox>
  
      )}
      

    </Navigation>
   
    {openAbout ? 
      <Dropdown
        open = {openAbout}
        setOpen = {setOpenAbout}
        options={["Quiénes somos?", "Filosofia", "Personas"]}
        secondTitle = {'Que hacemos?'}
        options2={["Territorios Culturales", "Investigación", "Incidencias Políticas"]}
        thirdTitle = {["Dónde trabajamos?"]}
        options3={["Parque de la Papa - Pisac", "Parque de Maíz - Lares", "Parque Espiritual - Vilcanota", "Programas y Redes Internacionales"]}
        ImageNav = {imgAndes}
      />  : null
    }

    {openResearch ? 
      <Dropdown
        open = {openResearch}
        setOpen = {setOpenResearch}
        options = {["Yachay Kuychi", "Quiénes somos?"]}
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