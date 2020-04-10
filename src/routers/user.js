const express = require('express');
const Router = express.Router();
const users = require('../controller/user')

Router
  // .get('/', users.getUsers)
  // .get('/:id_user', users.usersDetail)
  // .post('/', users.insertUser)
  // .delete('/:id', users.deleteUsers)
  // .patch('/:id_user', users.updateUsers)
  .post('/login', users.login)
  // .post('/aktivasiuser', users.aktivasiuser)
  .post('/register', users.register)


module.exports = Router;

// .get('/:id', user.userDetail)


// .post('/register', userController.register)
// .post('/login', userController.login)