
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'Larry', createdAt: new Date()}),
        knex('users').insert({name: 'Curly', createdAt: new Date()}),
        knex('users').insert({name: 'Moe', createdAt: new Date()})
      ]);
    });
};
