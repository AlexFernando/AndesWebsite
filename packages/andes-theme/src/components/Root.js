import React, {useEffect} from "react";
import { Head, connect, Global, css, styled } from "frontity";
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

import StayInTouch from './stayInTouch';

import Loading from './Loading';

//spanish 
import SecondaryNavbarSpanish from '../components-spanish/SecondaryNavbar';
import SearchBarSpanish from '../components-spanish/SearchBar';
import MenuSpanish from '../components-spanish/Menu';
import FooterSpanish from '../components-spanish/footer';
import ContactSpanish from '../components-spanish/contact';
import InvestigacionSpanish from '../components-spanish/Investigacion';
import PublicacionesSpanish from '../components-spanish/Publicaciones';
import NewsSpanish from '../components-spanish/News';
import EventosSpanish from '../components-spanish/Eventos';
import IntercambiosSpanish from '../components-spanish/Intercambios';
import ToolkitSpanish from '../components-spanish/Toolkit';
import FormularioContacto from '../components-spanish/formularioContacto';


export let readMore = '';
export let getMore = '';
export let learn = '';
export let explore = '';

 
const Root = ({ state, actions }) => {

    const data = state.source.get(state.router.link);

    
        useEffect( () => {
            if( state.theme.lang === "en") {
                //actions.source.fetch("/search")
                actions.source.fetch("/home")
                actions.source.fetch("/cardimage/")
                actions.source.fetch("/philosophy")
                readMore = 'READ MORE'
                getMore = 'GET MORE'
                learn = 'LEARN'
                explore = 'EXPLORE'
            }

            else if (state.theme.lang === "es") {
                //actions.source.fetch("/es-search")
                actions.source.fetch("/home-es")
                actions.source.fetch("/es-philosophy")
                actions.source.fetch("/cardimage")
                readMore = 'LEER MÁS'
                getMore = 'SABER MÁS'
                learn = 'CONOCER'
                explore = 'EXPLORAR'
            }
          
          }, [])

    return (
        <>
            <Global
                styles={css`

                    body {
                        margin: 0;
                        font-family: 'Lato', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        /*height: 100%;*/
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
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            
            {!data.isReady ? <Loading /> : 
            
            <>
            { 
            
            state.theme.lang == "en" ?
                
                <>
                <SecondaryNavbar />

                <Menu />
                {data.isHomePage && <HomePage/>}

                {data.id === 172 && <Filosofia />}

                {data.id === 432 && <Stuff />}

                {data.isNoticiasRelevantes && <News />}                

                {data.isSearchBar && <SearchBar />}

                {data.id === 262 && <TerritoriosCulturales/>}

                {data.isInvestigacion && <Investigacion />}

                {data.id === 467 && <Politica />}

                {data.id === 303 && <PotatoPark />}

                {data.id === 330 && <LaresPark />}

                {data.id === 332 && <VilcanotaPark />}

                {data.isEventos && <Eventos />}

                {data.id === 334 && <InternationalPrograms />}

                {data.id === 443 && <NosotrosYachay />}

                {data.id === 423 && <Cursos />}

                {data.isPublicaciones && <Publicaciones />}

                {data.id === 404 && <Pasantias />}

                {data.isIntercambios && <Intercambios/>}

                {data.isToolkit && <Toolkit />}

                {data.id === 503 && <AnniversaryPeople />}

                {data.id === 526 && <AnniversaryProjects/>}

                {data.id === 530 && <AnniversaryPublications/>}

                {state.router.link === "/stayintouch/" && data.isPage && <StayInTouch/>}
                
                
                <Contact />
            
                <Footer title={"Andes"}/>
                </>

                : 
                
              
                <>
                    <SecondaryNavbarSpanish />
                    <MenuSpanish />
                    {data.isHomePageSpanish && <HomePage/> }

                {data.id === 192 && <Filosofia />}
            
                {data.id === 415 && <Stuff />}

                {data.isNoticiasRelevantesSpanish && <NewsSpanish />}

                {data.isSearchBarSpanish && <SearchBarSpanish />}

                {data.id === 269 && <TerritoriosCulturales/>}

                {data.isInvestigacionSpanish && <InvestigacionSpanish />}

                {data.id === 419 && <Politica />}

                {data.id === 283 && <PotatoPark />}

                {data.id === 309 && <LaresPark />}

                {data.id === 311 && <VilcanotaPark />}

                {data.isEventosSpanish && <EventosSpanish />}

                {data.id === 313 && <InternationalPrograms />}

                {data.id === 417 && <NosotrosYachay />}

                {data.id === 413 && <Cursos />}

                {data.isPublicacionesSpanish && <PublicacionesSpanish />}

                {data.id === 411 && <Pasantias />}

                {data.isIntercambiosSpanish && <IntercambiosSpanish/>}

                {data.isToolkitSpanish && <ToolkitSpanish />}

                {data.id === 489 && <AnniversaryPeople />}

                {data.id === 491 && <AnniversaryProjects/>}

                {data.id === 493 && <AnniversaryPublications/>}

                {state.router.link === "/es-stayintouch/" && data.isPage &&  <FormularioContacto/>}
                
                    <ContactSpanish />
                    <FooterSpanish title={"Andes"}/>
                </>
            }
            </>
            }
        </>
    );
};
  
export default connect(Root);