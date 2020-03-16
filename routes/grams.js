const express = require('express')
const knex = require('../db/client')
const { grams } = require('../controllers')

const router = express.Router()

  router.get('/', grams.getGrams)
 
  router.get('/new', grams.newGrams)
  
  router.post('/', grams.postGrams)
  

module.exports = router
