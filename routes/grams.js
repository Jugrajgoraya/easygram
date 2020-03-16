const express = require('express')
const knex = require('../db/client')
const { grams } = require('../controllers')

const router = express.Router()


  router.get('/', grams.welcome)

  router.get('/grams', grams.getGrams)
  router.get('/users/new', grams.newUsers)
 
  router.get('/grams/new', grams.newGrams)
  
  router.post('/grams', grams.postGrams)
  

module.exports = router
