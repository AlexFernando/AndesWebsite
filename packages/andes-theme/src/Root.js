import React from "react";
import { Head, connect, Global, css, styled } from "frontity";
import BgImage from './bgImage';
import HomePage from './HomePage';
import Menu from './Menu';
import Footer from './footer';
import Contact from './contact';
import Filosofia from './Filosofia';
import Stuff from './Stuff';
import SearchBar from './SearchBar';
import SecondaryNavbar from './SecondaryNavbar';
import TerritoriosCulturales from './TerritoriosCulturales';
import Investigacion from './Investigacion';
import Politica from './Politica';
import PotatoPark from './potatoPark';
import LaresPark from './LaresPark';
import VilcanotaPark from './VilcanotaPark';
import Publicaciones from './Publicaciones';
import News from './News';
import Eventos from './Eventos';
import InternationalPrograms from './InternationalsPrograms';
import Cursos from './Cursos';
import NosotrosYachay from './NosotrosYachay';
import Pasantias from './Pasantias';
import Intercambios from './Intercambios';
import Toolkit from './Toolkit';
import Aniversary from './Aniversary';

const Root = ({ state }) => {

    const data = state.source.get(state.router.link);

    return (
        <>
            <Global
                styles={css`

                    body {
                        margin: 0;
                        font-family: 'Lato', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        height: 100%;
                    }

                   /** 
                    * {
                        border: 1px solid #f00 !important;
                    }*/
                  
                

                    p {
                        font-family: 'Lato', sans-serif;
                        font-weight: 400;
                    }
                `}
            />

            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <SecondaryNavbar />
            
            <Menu />
            
                {data.isBackgroundImage && <BgImage />}
                {data.isHomePage && <HomePage/>}

                {data.isPhilosophy && <Filosofia />}

                {data.isStuff && <Stuff />}

                {data.isNoticiasRelevantes && <News />}

                {data.isSearchBar && <SearchBar />}

                {data.isTerritorios && <TerritoriosCulturales/>}

                {data.isInvestigacion && <Investigacion />}

                {data.isPolitica && <Politica />}

                {data.isPotatoPark && <PotatoPark />}

                {data.isLaresPark && <LaresPark />}

                {data.isVilcanotaPark && <VilcanotaPark />}

                {data.isEventos && <Eventos />}

                {data.isInternationalsPrograms && <InternationalPrograms />}

                {data.isNosotrosYachay && <NosotrosYachay />}

                {data.isCursos && <Cursos />}

                {data.isPublicaciones && <Publicaciones />}

                {data.isPasantias && <Pasantias />}

                {data.isIntercambios && <Intercambios/>}

                {data.isToolkit && <Toolkit />}

                {data.isAniversario && <Aniversary />}
            <Contact />

            <Footer title={"Andes"}/>
        </>
    );
};
  
export default connect(Root);