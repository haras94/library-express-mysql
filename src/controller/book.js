const bookModel = require('../models/book');
const MiscHelper = require('../helpers/helpers')
require('dotenv').config()
const redis = require('redis');
const client = redis.createClient(process.env.PORT_REDIS)

module.exports = {
  getBooks: (req, res) => {
    const sort = req.query.sort;
    const search = req.query.search;
    console.log(req.query)
    bookModel.getBooks(search, sort)
      .then((result) => {
        client.setex('getallbooks',3600,JSON.stringify(result))
        MiscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  bookDetail: (req, res) => {
    const idBook = req.params.id_book
    bookModel.bookDetail(idBook)
      .then((result) => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  insertBook: (req, res) => {
    const {
      title,
      description,
      image,
      status,
      author,
      id_category
    } = req.body;
    const data = {
      title,
      description,
      image,
      status,
      author,
      id_category,
      created_at: new Date(),
    }
    bookModel.insertBook(data)
      .then((result) => {
        res.send(result);
      })
      .catch(err => console.log(err));
  },
  updateBook: (req, res) => {
    const idBook = req.params.id_book
    const {
      title,
      description,
      image,
      status,
      author,
      id_category
    } = req.body;
    const data = {
      title,
      description,
      image,
      status,
      author,
      id_category,
      update_at: new Date(),
    }
    bookModel.updateBook(idBook, data)
      .then((result) => {
        res.send(result);
      })
      .catch(err => console.log(err));
  },
  deleteBook: (req, res) => {
    const idBook = req.params.id_book
    bookModel.deleteBook(idBook)
      .then((result) => {

      })
      .catch(err => console.log(err));
  },
}