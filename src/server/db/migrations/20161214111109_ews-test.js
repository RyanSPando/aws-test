// const knex = require('../connection');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.text('name');
    t.timestamp('createdAt');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
