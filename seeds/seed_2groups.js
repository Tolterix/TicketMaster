
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 1, name: '429th COS'},
		{id: 2, name: 'Minneapolis AFB', parent_id: 1},
		{id: 3, name: '46th CS', parent_id: 2},
		{id: 4, name: 'Network Shop', parent_id: 3},
		{id: 5, name: 'Server Shop', parent_id: 3},
		{id: 6, name: 'Radio Shop', parent_id: 3},
		{id: 7, name: '46th IS', parent_id: 2},
		{id: 8, name: 'Network Shop', parent_id: 7},
		{id: 9, name: 'Server Shop', parent_id: 7},
		{id: 10, name: '12th COS'},
		{id: 11, name: 'Los Angeles AFB', parent_id: 10},
		{id: 12, name: '86th CS', parent_id: 11},
		{id: 13, name: 'Network Shop', parent_id: 12},
		{id: 14, name: 'Server Shop', parent_id: 12},
		{id: 15, name: 'Workstation Shop', parent_id: 12}
      ]);
    });
};
