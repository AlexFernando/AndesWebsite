import React from "react";
import { Head, connect, Global, css, styled } from "frontity";
import BgImage from './bgImage';
import Menu from './Menu';
import Footer from './footer';
import Contact from './contact';
import BriefContent from './BriefContent';
import Filosofia from './Filosofia';
import Stuff from './Stuff';
import News from './News';
import SearchBar from './SearchBar';
import SecondaryNavbar from './SecondaryNavbar';
import TerritoriosCulturales from './TerritoriosCulturales';
import Investigacion from './Investigacion';
import Politica from './Politica';
import PotatoPark from './potatoPark';
import Eventos from './Eventos';

const Root = ({ state }) => {

    const data = state.source.get(state.router.link);

    return (
        <>
            <Global
                styles={css`
                    body {
                        margin: 0;
                        font-family: 'Lato', sans-serif;
                    }

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

                {data.isPhilosophy && <Filosofia />}

                {data.isStuff && <Stuff />}

                {data.isNoticiasRelevantes && <News />}

                {data.isSearchBar && <SearchBar />}

                {data.isTerritorios && <TerritoriosCulturales/>}

                {data.isInvestigacion && <Investigacion />}

                {data.isPolitica && <Politica />}

                {data.isPotatoPark && <PotatoPark />}

                {data.isEventos && <Eventos />}

            <Contact />


            <Footer title={"Andes"}/>
        </>
    );
};
  
export default connect(Root);