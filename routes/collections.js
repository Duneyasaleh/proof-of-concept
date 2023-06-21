import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'
import data from '../Course/collections.json' assert { type: 'json' }

const collections = express.Router()
collections.get('/collection/:slug', (request, response) => {
    const slug = request.params.slug;
  
      const collections = data.data;
      const item = collections.find(collection => collection.attributes.slug === slug);
      // collection view (thxxx thomas) 
      if (item) {
        const itemId = item.id;
        // Ivar heeft mij uitgelegd hoe kan ik een raw link maken 
        const itemJsonUrl = `https://raw.githubusercontent.com/Duneyasaleh/proof-of-concept/main/Course/collection/${itemId}.json `;
  
        fetchJson(itemJsonUrl).then((itemData) => {
          // Fetch main visuals and image files
          var mainVisuals = {};
          var imageFiles = {};
  
          data.included.forEach(element => {
            if (element.type === 'MainVisual') {
              mainVisuals[element.id] = element.relationships.image.data.id;
            } else if (element.type === 'ImageFile') {
              imageFiles[element.id] = element.attributes.sourceSet;
            }
          });

          const message = "De Correspondent - " + item.attributes.title;
          response.render('collection', { ...data, item, itemData, message, mainVisuals, imageFiles });
        });
      }
    });
   

  export default collections
  