
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'trevor@tdb.com', password: 'trevor', first_name: 'trevor', last_name: 'tdb'},
        {id: 2, email: 'jared@tdb.com', password: 'jared', first_name: 'jared', last_name: 'tdb'},
		{id: 3, email: 'henry@tdb.com', password: 'henry', first_name: 'henry', last_name: 'tdb'},
        {id: 4, email: 'josiah@tdb.com', password: 'josiah', first_name: 'josiah', last_name: 'tdb'},
		{id: 5, email: 'amnsnuffy@tdb.com', password: 'snuffsnuff', first_name: 'amn', last_name: 'snuffy'}
      ]);
    });
};
