const express = require('express')
const knex = require('../db/client')
const { events } = require('../controllers')

const router = express.Router()


  router.get('/', events.welcome)

  router.get('/grams', events.getGrams)
  router.get('/users/new', events.newUsers)
 
  router.get('/grams/new', events.newGrams)
  
  router.post('/grams', events.postGrams)
  

module.exports = router
