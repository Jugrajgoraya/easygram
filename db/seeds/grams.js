const faker = require('faker') 

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('grams').del()
      .then(function () {
        // Inserts seed entries
        return knex('grams').insert(new Array(50).fill().map(() => {
          return {
            srcUrl: `${faker.image.avatar()}`,
            description: `${faker.lorem.sentence()}`
          }
        }))
      })
  }
  