const connection = require('../configs/db');

module.exports = {
  getBooks: (search, sort) => {
    return new Promise((resolve, reject) => {
      if (search) {
        connection.query("SELECT book.*, category.name FROM book JOIN category ON book.id_category = category.id WHERE description LIKE ? OR author LIKE ? OR title LIKE ?", [`{search}%`, `%${search}%`, `%${search}%`], (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else if (sort) {
        connection.query("SELECT book.* FROM book ORDER BY " + sort + " ASC ", (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else {
        connection.query("SELECT book.*, category.name FROM book JOIN category ON book.id_category = category.id", (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  bookDetail: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT book.*, category.name FROM book INNER JOIN category ON book.id_category = category.id WHERE book.id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertBook: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO book SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateBook: (id_book, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE book SET ? WHERE id= ?", [data, id_book], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteBook: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM book WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}