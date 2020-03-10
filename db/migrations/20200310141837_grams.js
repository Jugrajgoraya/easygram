
exports.up = function(knex) {
    return knex.schema.createTable('grams', t => {
        t.increments('id')
        t.string('srcUrl')
        t.string('description')
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('grams')
};
