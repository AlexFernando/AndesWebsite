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
import AnniversaryPeople from './AnniversaryPeople';
import AnniversaryProjects from './AnniversaryProjects';
import AnniversaryPublications from './AnniversaryPublications';

//spanish 
import SecondaryNavbarSpanish from '../components-spanish/SecondaryNavbar';
import SearchBarSpanish from '../components-spanish/SearchBar';
import MenuSpanish from '../components-spanish/Menu';
import FooterSpanish from '../components-spanish/footer';
import ContactSpanish from '../components-spanish/contact';
import BgImageSpanish from '../components-spanish/bgImage';
import HomePageSpanish from '../components-spanish/HomePage';
import FilosofiaSpanish from '../components-spanish/Filosofia';
import StuffSpanish from '../components-spanish/Stuff';
import TerritoriosCulturalesSpanish from '../components-spanish/TerritoriosCulturales';
import InvestigacionSpanish from '../components-spanish/Investigacion';
import PoliticaSpanish from '../components-spanish/Politica';
import PotatoParkSpanish from '../components-spanish/potatoPark';
import LaresParkSpanish from '../components-spanish/LaresPark';
import VilcanotaParkSpanish from '../components-spanish/VilcanotaPark';
import PublicacionesSpanish from '../components-spanish/Publicaciones';
import NewsSpanish from '../components-spanish/News';
import EventosSpanish from '../components-spanish/Eventos';
import InternationalProgramsSpanish from '../components-spanish/InternationalsPrograms';
import CursosSpanish from '../components-spanish/Cursos';
import NosotrosYachaySpanish from '../components-spanish/NosotrosYachay';
import PasantiasSpanish from '../components-spanish/Pasantias';
import IntercambiosSpanish from '../components-spanish/Intercambios';
import ToolkitSpanish from '../components-spanish/Toolkit';
import AnniversaryPeopleSpanish from '../components-spanish/AnniversaryPeople';
import AnniversaryProjectsSpanish from '../components-spanish/AnniversaryProjects';
import AnniversaryPublicationsSpanish from '../components-spanish/AnniversaryPublications';


const Root = ({ state }) => {

    const data = state.source.get(state.router.link);

    let link = state.router.link;

    let regex = /\/es\//;

    let spanishLanguage = false;

    let myarraySpanish = link.match(regex);

    if(myarraySpanish) {
        spanishLanguage = true;
    };

    console.log('link: ',link)

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

                
                   /* * {
                        border: 1px solid #f00 !important;
                    } */
                     
                    
                  
                

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
            
            {spanishLanguage ? <SecondaryNavbarSpanish /> : <SecondaryNavbar />}

            {spanishLanguage ? <MenuSpanish /> : <Menu />}
    
                {data.isBackgroundImage && <BgImage />}
                {data.isBackgroundImageSpanish && <BgImageSpanish />}

                {data.isHomePage && <HomePage/>}
                {data.isHomePageSpanish && <HomePageSpanish/>}

                {data.isPhilosophy && <Filosofia />}
                {data.isPhilosophySpanish && <FilosofiaSpanish />}

                {data.isStuff && <Stuff />}
                {data.isStuffSpanish && <StuffSpanish />}

                {data.isNoticiasRelevantes && <News />}                
                {data.isNoticiasRelevantesSpanish && <NewsSpanish />}

                {data.isSearchBar && <SearchBar />}
                {data.isSearchBarSpanish && <SearchBarSpanish />}

                {data.isTerritorios && <TerritoriosCulturales/>}
                {data.isTerritoriosSpanish && <TerritoriosCulturalesSpanish/>}

                {data.isInvestigacion && <Investigacion />}
                {data.isInvestigacionSpanish && <InvestigacionSpanish />}

                {data.isPolitica && <Politica />}
                {data.isPoliticaSpanish && <PoliticaSpanish />}

                {data.isPotatoPark && <PotatoPark />}
                {data.isPotatoParkSpanish && <PotatoParkSpanish />}

                {data.isLaresPark && <LaresPark />}
                {data.isLaresParkSpanish && <LaresParkSpanish />}

                {data.isVilcanotaPark && <VilcanotaPark />}
                {data.isVilcanotaParkSpanish && <VilcanotaParkSpanish />}

                {data.isEventos && <Eventos />}
                {data.isEventosSpanish && <EventosSpanish />}

                {data.isInternationalsPrograms && <InternationalPrograms />}
                {data.isInternationalsProgramsSpanish && <InternationalProgramsSpanish />}

                {data.isNosotrosYachay && <NosotrosYachay />}
                {data.isNosotrosYachaySpanish && <NosotrosYachaySpanish />}

                {data.isCursos && <Cursos />}
                {data.isCursosSpanish && <CursosSpanish />}

                {data.isPublicaciones && <Publicaciones />}
                {data.isPublicacionesSpanish && <PublicacionesSpanish />}

                {data.isPasantias && <Pasantias />}
                {data.isPasantiasSpanish && <PasantiasSpanish />}

                {data.isIntercambios && <Intercambios/>}
                {data.isIntercambiosSpanish && <IntercambiosSpanish/>}

                {data.isToolkit && <Toolkit />}
                {data.isToolkitSpanish && <ToolkitSpanish />}

                {data.isAniversarioPersonas && <AnniversaryPeople />}
                {data.isAniversarioPersonasSpanish && <AnniversaryPeopleSpanish />}

                {data.isAniversarioProyectos && <AnniversaryProjects/>}
                {data.isAniversarioProyectosSpanish && <AnniversaryProjectsSpanish/>}

                {data.isAniversarioPublicaciones && <AnniversaryPublications/>}
                {data.isAniversarioPublicacionesSpanish && <AnniversaryPublicationsSpanish/>}

            {spanishLanguage ? <ContactSpanish /> : <Contact />}
            
            {spanishLanguage ? <FooterSpanish title={"Andes"} /> : <Footer title={"Andes"}/>}
            
        </>
    );
};
  
export default connect(Root);