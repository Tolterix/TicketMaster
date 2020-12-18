
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('group_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('group_members').insert([
        {id: 1, group_id: 1, user_id: 1},
		{id: 2, group_id: 2, user_id: 1},
		{id: 3, group_id: 7, user_id: 3},
		{id: 4, group_id: 3, user_id: 4},
		{id: 5, group_id: 4, user_id: 4},
		{id: 6, group_id: 5, user_id: 4},
		{id: 7, group_id: 8, user_id: 4},
		{id: 8, group_id: 9, user_id: 4},
		{id: 9, group_id: 10, user_id: 3},
		{id: 10, group_id: 11, user_id: 3},
		{id: 11, group_id: 13, user_id: 2},
		{id: 12, group_id: 14, user_id: 2},
		{id: 13, group_id: 15, user_id: 2},
		{id: 14, group_id: 15, user_id: 5},
		{id: 15, group_id: 15, user_id: 5},
		{id: 16, group_id: 15, user_id: 5}
      ]);
    });
};
