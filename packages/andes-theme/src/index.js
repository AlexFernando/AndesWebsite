import Root from "./Root";

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
        },

        "/brief/": {
          isReady: true,
          isFetching: false,
          isBrief: true,
        },

        "/filosofia/": {
          isReady: true,
          isFetching: false,
          isPhilosophy: true,
        },

        "/personas/": {
          isReady: true,
          isFetching: false,
          isStuff: true,
        },

        "/noticiasrelevantes/": {
          isReady: true,
          isFetching: false,
          isNoticiasRelevantes: true,
        },

        "/searchbar/": {
          isReady: true,
          isFetching: false,
          isSearchBar: true,
        },

        "/territoriosculturales/": {
          isReady: true,
          isFetching: false,
          isTerritorios: true,
        },

        "/investigación/": {
          isReady: true,
          isFetching: false,
          isInvestigacion: true,
        },

        "/incidenciaspolíticas/": {
          isReady: true,
          isFetching: false,
          isPolitica: true,
        },

        "/parquedelapapa-pisac/": {
          isReady: true,
          isFetching: false,
          isPotatoPark: true,
        },

        "/eventos/": {
          isReady: true,
          isFetching: false,
          isEventos: true,
        },
      },
    },
  },
  actions: {
    theme: {}
  }
};
