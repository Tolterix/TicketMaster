
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('group_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('group_categories').insert([
        {id: 1, group_id: 4, name: 'Connectivity Issues'},
		{id: 2, group_id: 5, name: 'Sharedrive Issues'},
		{id: 3, group_id: 6, name: 'Radio Equipment'},
		{id: 4, group_id: 8, name: 'Connectivity Issues'},
		{id: 5, group_id: 9, name: 'Sharedrive Issues'},
		{id: 6, group_id: 13, name: 'Connectivity Issues'},
		{id: 7, group_id: 14, name: 'Sharedrive Issues'},
		{id: 8, group_id: 15, name: 'Workstation Issues'}
      ]);
    });
};
