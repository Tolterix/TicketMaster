
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ticket_assignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_assignments').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
