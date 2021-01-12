import semillasPapa from '../static/images/news/semillasPapa.jpg'
import papaCrisis from '../static/images/news/papaCrisis.jpeg'
import papaGMrechazo from '../static/images/news/papaGMrechazo.jpg'
import agrobiodiversidad from '../static/images/news/agrobiodiversidad.jpg'
import localCovid from '../static/images/news/localCovid2scaled.jpg'

export const dataNews = [

    {
        url: "https://www.cbc.ca/news/technology/what-on-earth-indigenous-seeds-tradition-1.5617755",
        titulo: "Native Potato Seeds",
        content: "For indigenous peoples, seeds are more than food: they are members of the family.",
        urlImage: `${semillasPapa}`,
        fecha : "November 17, 2020"
    },

    {
        url: "",
        titulo: "The Potato Park could hold the key to avoiding a global food security crisis",
        content: "The agricultural park high in the Andes preserves the experience to breed varieties suitable for a changing climate.",
        urlImage: `${papaCrisis}`,
        fecha : "November 1, 2020"
    },

    {
        url: "",
        titulo: "PRESS RELEASE: REJECTING GMO POTATOES IN EAST AFRIC",
        content: "Together, Andean and African farmers are condemning the digital sequencing of genetics of potatoes from the Andean center of origin: it opens doors for biopiracy.",
        urlImage: `${papaGMrechazo}`,
        fecha : "October 15, 2020"
    },

    {
        url: "",
        titulo:   "THE POTATO PARK: AGROBIODIVERISTY ZONE",
        content: "The Potato Park was recently recognized as an Agrobiodiversity Zone by the Peruvian government",
        urlImage: `${agrobiodiversidad}`,
        fecha : "Septembre 15, 2020"
    },

    {
        url: "",
        titulo:   "Local responses to the COVID-19 Crisis",
        content: "Like our brothers and sisters around the world, we face unprecedented challenges in the context of the current pandemic. We are working to provide resources to our indigenous partners, support our staff, and reimagine ways of working in a world where group meetings have become impossible.",
        urlImage: `${localCovid}`,
        fecha : "July 15, 2020"
    },
];
