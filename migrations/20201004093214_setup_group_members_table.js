exports.up = function(knex) {
    return knex.schema.createTable('group_members', table => {
        table.increments('id').notNullable();
		table.integer('group_id').notNullable();
		table.integer('user_id').notNullable();
		
		table.foreign('group_id').references('id').inTable('groups');
		table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('group_members');
};


