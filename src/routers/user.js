const express = require('express');
const Router = express.Router();
const users = require('../controller/user')

Router
  .get('/', users.getUsers)
  .get('/:id_user', users.usersDetail)
  .delete('/:id', users.deleteUsers)
  .patch('/:id_user', users.updateUsers)


module.exports = Router;

// .get('/:id', user.userDetail)
// .get('/login', user.login)

// .post('/register', userController.register)
// .post('/login', userController.login)