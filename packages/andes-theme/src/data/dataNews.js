import semillasPapa from '../static/images/news/semillasPapa.jpg'
import papaCrisis from '../static/images/news/papaCrisis.jpeg'
import papaGMrechazo from '../static/images/news/papaGMrechazo.jpg'
import agrobiodiversidad from '../static/images/news/agrobiodiversidad.jpg'
import localCovid from '../static/images/news/localCovid2scaled.jpg'

export const dataNews = [

    {
        url: "https://www.cbc.ca/news/technology/what-on-earth-indigenous-seeds-tradition-1.5617755",
        titulo: "Semillas de Papa",
        content: "Para los pueblos indígenas, las semillas son más que alimentos: son miembros de su familia",
        urlImage: `${semillasPapa}`,
        fecha : "Noviembre 17, 2020"
    },

    {
        url: "",
        titulo: "Cómo el Parque de la Papa del Perú podría evitar la crisis alimentaria mundial",
        content: "El parque agrícola alto en los Andes conserva la experiencia para criar cepas aptas para un clima cambiante.",
        urlImage: `${papaCrisis}`,
        fecha : "Noviembre 1, 2020"
    },

    {
        url: "",
        titulo: "Nota de Prensa: Rechazo de la papa GM en África",
        content: "Los agricultores andinos y africanos condenan la información de secuencia digital de papas de los centros de origen: abre puertas para la biopiratería.",
        urlImage: `${papaGMrechazo}`,
        fecha : "Octubre 15, 2020"
    },

    {
        url: "",
        titulo:   "El Parque de la Papa – Zona de Agrobiodiversidad",
        content: "El Parque de la Papa fue reconocido recientemente como una Zona de Agrobiodiversidad por el estado peruano.",
        urlImage: `${agrobiodiversidad}`,
        fecha : "Septiembre 15, 2020"
    },

    {
        url: "",
        titulo:   "Respuestas locales a la crisis COVID-19",
        content: "Igual que nuestros hermanos y hermanas en todo el mundo, nos enfrentamos a desafíos sin precedentes en el contexto de la pandemia actual. Estamos trabajando para proporcionar recursos a nuestros socios indígenas, apoyar a nuestro personal, y re-imaginar formas de trabajar en un mundo donde las reuniones grupales se han vuelto imposibles.",
        urlImage: `${localCovid}`,
        fecha : "Julio 15, 2020"
    },
];
