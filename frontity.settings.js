const settings = {
  
  "name": "andes",
  "state": {
    "frontity": {
      "url": "https://andescusco.info",
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
          "api": "https://andescusco.info/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
