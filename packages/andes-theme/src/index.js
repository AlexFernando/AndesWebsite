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

        "/investigacion/": {
          isReady: true,
          isFetching: false,
          isInvestigacion: true,
        },

        "/incidenciaspoliticas/": {
          isReady: true,
          isFetching: false,
          isPolitica: true,
        },

        "/parquedelapapa-pisac/": {
          isReady: true,
          isFetching: false,
          isPotatoPark: true,
        },

        "/parquedemaiz-lares/": {
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

        "/pasantias/": {
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

        "/aniversariopersonas/": {
          isReady: true,
          isFetching: false,
          isAniversarioPersonas: true,
        },

        "/aniversarioproyectos/": {
          isReady: true,
          isFetching: false,
          isAniversarioProyectos: true,
        },

        "/aniversariopublicaciones/": {
          isReady: true,
          isFetching: false,
          isAniversarioPublicaciones: true,
        },
      },
    },
  },
  actions: {
    theme: {}
  }
};
