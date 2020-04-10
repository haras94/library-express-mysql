const express = require('express');
const book = require('./book');
const user = require('./user');
const category = require('./category')

const Router = express.Router();
Router
    .use('/book', book)
    .use('/user', user)
    .use('/category', category)

// sdf
module.exports = Router;