
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {id: 1, status: 0, title: 'My computer died', description: 'My monitor is not responding', category_id: 8, submitted_by: 5},
        {id: 2, status: 2, title: 'No internet', description: 'My computer cannot connect to outlook, but chrome and everything else works fine', category_id: 4, submitted_by: 5},
        {id: 3, status: 3, title: 'I can\'t access the share drives', description: 'the print drive and share drive are not on my computer anymore', category_id: 7, submitted_by: 5}
      ]);
    });
};
