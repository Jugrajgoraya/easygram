const knex = require('../db/client')

module.exports = {
    all : ()=>{
       return knex.select('*').from('grams')
          .then(grams => {
            return grams
        })
    },

    create: ({ srcUrl, description,price }) => {
        return knex.insert({
          srcUrl,
          description,
          price
        }).into('grams').returning('*')
        .then(newGram => {
          return newGram
        })
      }

}
