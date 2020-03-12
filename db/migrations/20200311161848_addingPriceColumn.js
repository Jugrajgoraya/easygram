exports.up = function(knex, Promise) {
    return knex.schema.table('grams', function(t) {
        t.integer('price');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('grams', function(t) {
        t.dropColumn('price');
    });
};
