const express = require('express')
const router = express.Router()
const knex = require('../db/client')

  router.get('/grams', (req, res) => {
      knex.select('*').from('grams')
        .then(grams => {
          res.render('users/index', { grams })
        })
    })

  router.get('/users/new', (req, res)=>{
    res.render('users/new.ejs')
  })
 
  router.get('/grams/new', (req, res)=>{
    res.render('grams/new.ejs')
  })
  
  router.post('/grams', (req, res) => {
    const 
  { srcUrl,
    description,
    price
  } = req.body
  if(!srcUrl){
    res.send('please provide an URL')
  }else{
    knex.insert({ 
      srcUrl,
      description,
      price
    }).into('grams')
      .then(() => {
        res.redirect('/grams')
      })
      .catch(() => {
        res.render('users/new')
      })
  }
   
  })

  router.get('/', (req, res) =>{
    res.render('welcome')
  })
  

module.exports = router
