const knex = require('../db/client')

module.exports = {
    welcome: (req, res) =>{
        res.render('welcome')
    },

    newUsers: (req, res)=>{
        res.render('users/new.ejs')
    },

    newGrams: (req, res)=>{
        res.render('grams/new.ejs')
    },

    getGrams: (req, res) => {
        knex.select('*').from('grams')
          .then(grams => {
            res.render('users/index', { grams })
        })
    },

    postGrams: (req, res) => {
      const 
      { srcUrl,
        description,
        price
      } = req.body
      if(!srcUrl){
        res.send('please provide an URL')
      }
      else{
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
    }
    

}
