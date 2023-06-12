import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'
import data from '../Course/collections.json' assert { type: 'json' }

var mainVisuals = {}
var imageFiles = {}
// Loop door alle included variabelen heen
data.included.forEach(element => {
   if (element.type == 'MainVisual') {
      mainVisuals[element.id] = element.relationships.image.data.id
   } else if (element.type == 'ImageFile') {
      imageFiles[element.id] = element.attributes.sourceSet
   }
})

dotenv.config()
const index = express.Router()
// Maak een route voor de index
index.get('/', (request, response) => { 
   const dataJson = './'
   response.render('index', {data: data, mainVisuals: mainVisuals, imageFiles: imageFiles})
   //console.log(data);
      })  
export default index
