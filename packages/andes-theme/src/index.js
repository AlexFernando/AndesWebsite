import Root from "./components/Root";

export default {
  name: "andes-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {},
    source: {
      data: {

        "/": {
          isReady: true,
          isFetching: false,
          isBackgroundImage: true,
          isHomePage: true,
        },

        "/es-/": {
          isReady: true,
          isFetching: false,  
          isHomePageSpanish: true,
        },


        "/searchbar/": {
          isReady: true,
          isFetching: false,
          isSearchBar: true,
        },

        "/es-searchbar/": {
          isReady: true,
          isFetching: false,
          isSearchBarSpanish: true,
        },


        "/investigacion/": {
          isReady: true,
          isFetching: false,
          isInvestigacion: true,
        },

        "/es-investigacion/": {
          isReady: true,
          isFetching: false,
          isInvestigacionSpanish: true,
        },

        "/exchanges/": {
          isReady: true,
          isFetching: false,
          isIntercambios: true,
        },

        "/es-exchanges/": {
          isReady: true,
          isFetching: false,
          isIntercambiosSpanish: true,
        },

        "/intercambios/": {
          isReady: true,
          isFetching: false,
          isIntercambios: true,
        },

        "/es-intercambios/": {
          isReady: true,
          isFetching: false,
          isIntercambiosSpanish: true,
        },

        "/toolkit/": {
          isReady: true,
          isFetching: false,
          isToolkit: true,
        },

        "/es-toolkit/": {
          isReady: true,
          isFetching: false,
          isToolkitSpanish: true,
        },

        "/publications/": {
          isReady: true,
          isFetching: false,
          isPublicaciones: true,
        },        

        "/es-publications/": {
          isReady: true,
          isFetching: false,
          isPublicacionesSpanish: true,
        },

  
        "/news/": {
          isReady: true,
          isFetching: false,
          isNoticiasRelevantes: true,
        },

        "/es-news/": {
          isReady: true,
          isFetching: false,
          isNoticiasRelevantesSpanish: true,
        },

  
        "/events/": {
          isReady: true,
          isFetching: false,
          isEventos: true,
        },

        "/es-events/": {
          isReady: true,
          isFetching: false,
          isEventosSpanish: true,
        },
      },
    },
  },
  actions: {
    theme: {}
  }
};
