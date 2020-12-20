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
          isHomePage: true,
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

        "/searchbar/": {
          isReady: true,
          isFetching: false,
          isSearchBar: true,
        },

        "/territoriosbioculturales/": {
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

        "/parquedemaíz-lares/": {
          isReady: true,
          isFetching: false,
          isLaresPark: true,
        },

        "/parqueespiritual-vilcanota/": {
          isReady: true,
          isFetching: false,
          isVilcanotaPark: true,
        },

        "/programasyredesinternacionales/": {
          isReady: true,
          isFetching: false,
          isInternationalsPrograms: true,
        },

        "/cursos/": {
          isReady: true,
          isFetching: false,
          isCursos: true,
        },

        "/quienessomos/": {
          isReady: true,
          isFetching: false,
          isNosotrosYachay: true,
        },

        "/pasantías/": {
          isReady: true,
          isFetching: false,
          isPasantias: true,
        },

        "/intercambios/": {
          isReady: true,
          isFetching: false,
          isIntercambios: true,
        },

        "/cajadeherramientas/": {
          isReady: true,
          isFetching: false,
          isToolkit: true,
        },

        "/publicaciones/": {
          isReady: true,
          isFetching: false,
          isPublicaciones: true,
        },        

        "/noticiasrelevantes/": {
          isReady: true,
          isFetching: false,
          isNoticiasRelevantes: true,
        },

        "/eventos/": {
          isReady: true,
          isFetching: false,
          isEventos: true,
        },

        "/aniversario/": {
          isReady: true,
          isFetching: false,
          isAniversario: true,
        }
      },
    },
  },
  actions: {
    theme: {}
  }
};
