exports.up = function(knex) {
    return knex.schema.createTable('tickets', table => {
        table.increments('id').notNullable();
		table.integer('guid').notNullable();
		table.integer('status').notNullable();
		table.string('title', 255).notNullable();
		table.string('description').notNullable();
		table.integer('category_id').notNullable();
		table.integer('submitted_by').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		
		table.foreign('category_id').references('id').inTable('group_categories');
		table.foreign('submitted_by').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tickets');
};


