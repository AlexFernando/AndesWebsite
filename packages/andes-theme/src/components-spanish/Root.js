import React, {useEffect} from "react";
import { Head, connect, Global, css, styled } from "frontity";
//spanish 
import SecondaryNavbarSpanish from './SecondaryNavbar';
import SearchBarSpanish from './SearchBar';
import MenuSpanish from './Menu';
import FooterSpanish from './footer';
import ContactSpanish from './contact';
import HomePageSpanish from './HomePage';
import FilosofiaSpanish from './Filosofia';
import StuffSpanish from './Stuff';
import TerritoriosCulturalesSpanish from './TerritoriosCulturales';
import InvestigacionSpanish from './Investigacion';
import PoliticaSpanish from './Politica';
import PotatoParkSpanish from './potatoPark';
import LaresParkSpanish from './LaresPark';
import VilcanotaParkSpanish from './VilcanotaPark';
import PublicacionesSpanish from './Publicaciones';
import NewsSpanish from './News';
import EventosSpanish from './Eventos';
import InternationalProgramsSpanish from './InternationalsPrograms';
import CursosSpanish from './Cursos';
import NosotrosYachaySpanish from './NosotrosYachay';
import PasantiasSpanish from './Pasantias';
import IntercambiosSpanish from './Intercambios';
import ToolkitSpanish from './Toolkit';
import AnniversaryPeopleSpanish from './AnniversaryPeople';
import AnniversaryProjectsSpanish from './AnniversaryProjects';
import AnniversaryPublicationsSpanish from './AnniversaryPublications';
import FormularioContacto from './formularioContacto';

const Root = ({ state, actions}) => {

    const data = state.source.get(state.router.link);

    if(state.theme.lang == "en") { console.log("Hello English") }

    if(state.theme.lang == "es") { console.log("Hello Spanish") }

    useEffect( () => {
        actions.source.fetch("/es-search")
        actions.source.fetch("/home-es")
        actions.source.fetch("/es-philosophy")
        actions.source.fetch("/cardimage")
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

         
            <SecondaryNavbarSpanish /> 
            <MenuSpanish /> 
         
                {data.isHomePageSpanish && <HomePageSpanish/>}
            
                {data.id === 192 && <FilosofiaSpanish />}

            
                {data.isStuffSpanish && <StuffSpanish />}

                {data.isNoticiasRelevantesSpanish && <NewsSpanish />}
                {data.isSearchBarSpanish && <SearchBarSpanish />}

                {data.isTerritoriosSpanish && <TerritoriosCulturalesSpanish/>}

                {data.isInvestigacionSpanish && <InvestigacionSpanish />}

                {data.isPoliticaSpanish && <PoliticaSpanish />}

                {data.isPotatoParkSpanish && <PotatoParkSpanish />}

                {data.isLaresParkSpanish && <LaresParkSpanish />}

                {data.isVilcanotaParkSpanish && <VilcanotaParkSpanish />}

                {data.isEventosSpanish && <EventosSpanish />}

                {data.isInternationalsProgramsSpanish && <InternationalProgramsSpanish />}

                {data.isNosotrosYachaySpanish && <NosotrosYachaySpanish />}

                {data.isCursosSpanish && <CursosSpanish />}

                {data.isPublicacionesSpanish && <PublicacionesSpanish />}

                {data.isPasantiasSpanish && <PasantiasSpanish />}

                {data.isIntercambiosSpanish && <IntercambiosSpanish/>}

                {data.isToolkitSpanish && <ToolkitSpanish />}

                {data.isAniversarioPersonasSpanish && <AnniversaryPeopleSpanish />}

                {data.isAniversarioProyectosSpanish && <AnniversaryProjectsSpanish/>}

                {data.isAniversarioPublicacionesSpanish && <AnniversaryPublicationsSpanish/>}

                
                
                {state.router.link === "/es-stayintouch/" && data.isPage &&  <FormularioContacto/>}
                
            <ContactSpanish /> 
            
            <FooterSpanish title={"Andes"} /> 
            
        </>
    );
};
  
export default connect(Root);