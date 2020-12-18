
exports.up = function(knex) {
  return knex.schema.createTable('group_categories', table => {
        table.increments('id');
		table.integer('group_id').notNullable();
        table.string('name', 255).notNullable();
		
		table.foreign('group_id').references('id').inTable('groups');
  });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('groups_categories');
};
