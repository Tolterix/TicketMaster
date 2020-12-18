exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').notNullable();
		table.string('email', 255).notNullable();
		table.string('password').notNullable();
		table.string('first_name', 32).notNullable();
		table.string('last_name', 32).notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};

