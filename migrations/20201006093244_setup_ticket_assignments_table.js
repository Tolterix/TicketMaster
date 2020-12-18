exports.up = function(knex) {
    return knex.schema.createTable('ticket_assignments', table => {
        table.increments('id').notNullable();
		table.integer('ticket_id').notNullable();
		table.integer('assignee_id').notNullable();
		
		table.foreign('ticket_id').references('id').inTable('tickets');
		table.foreign('assignee_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ticket_assignments');
};


