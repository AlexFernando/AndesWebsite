const settings = {
  "name": "andes",
  "state": {
    "frontity": {
      "url": "https://2019-developers.sevilla.wordcamp.org/wp-json",
      "title": "Andes Website",
      "description": "A website for the ONG Andes"
    }
  },
  "packages": [
    {
      "name": "andes-theme",
    },

    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://2019-developers.sevilla.wordcamp.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
