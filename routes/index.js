import * as dotenv from 'dotenv'
import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'
import data from '../Course/collections.json' assert { type: 'json' }

dotenv.config()
const index = express.Router()
// Maak een route voor de index
index.get('/', (request, response) => { 
   const dataJson = './'
   response.render('index', data)
      })  
export default index
