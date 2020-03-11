const express = require('express')
const router = express.Router()
const knex = require('../db/client')

router.get('/', (req, res) => {
    knex.select('*').from('grams')
      .then(grams => {
        res.render('users/index', { grams })
      })
  })
  
module.exports = router
