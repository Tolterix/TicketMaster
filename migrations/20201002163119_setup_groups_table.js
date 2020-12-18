exports.up = function(knex) {
    return knex.schema.createTable('groups', table => {
        table.increments('id').notNullable();
        table.string('name', 255).notNullable();
        table.integer('parent_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('groups');
};


