const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  knex('users').select('*')
    .then(users => {
      res.render('index', {
        title: 'This is AWS',
        users
      });
    });
});

module.exports = router;
