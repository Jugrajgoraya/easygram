const faker = require('faker') 

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('events').del()
      .then(function () {
        // Inserts seed entries
        return knex('events').insert(new Array(50).fill().map(() => {
          return {
            title: `${faker.image.imageUrl()} `
          }
        }))
      })
  }