exports.up = function(knex) {
    return knex.schema.createTable('ticket_updates', table => {
        table.increments('id').notNullable();
		table.integer('ticket_id').notNullable();
		table.string('description').notNullable();
		table.integer('updated_by').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		
		table.foreign('ticket_id').references('id').inTable('tickets');
		table.foreign('updated_by').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ticket_updates');
};


