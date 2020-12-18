
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ticket_updates').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_updates').insert([
        {id: 1, ticket_id: 3, description: 'user could access sharedrive after restarting computer', updated_by: 2}
      ]);
    });
};
