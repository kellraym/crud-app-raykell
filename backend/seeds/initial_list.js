
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {name: 'do the laundry', due_date: 'Friday', description: 'its piling up!'},
        {name: 'do the laundry again', due_date: 'thursday', description: `we're almost completely buried!`},
      ]);
    });
};
