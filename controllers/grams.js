const { gram } = require('../models')


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
      gram.all()
        .then(grams => {
          res.render('users/index', { grams })
        })
        .catch(e => {
          res.render('users/index', { grams: [] })
        })
    },

    postGrams: (req, res) => {
      const {
        srcUrl,
        description,
        price
      } = req.body
      if (!srcUrl) { // if there is no srcUrl
        res.render('grams/new', { errors: ['Missing Image Url'] })
      }
      gram.create({ srcUrl, description,price })
        .then( newGram => {
          res.send(newGram)
        })
    }
    

}
