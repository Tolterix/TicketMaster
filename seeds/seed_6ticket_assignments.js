
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ticket_assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_assignments').insert([
        {id: 1, ticket_id: 2, assignee_id: 4},
		{id: 2, ticket_id: 3, assignee_id: 2}
      ]);
    });
};
