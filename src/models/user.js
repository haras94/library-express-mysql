const connection = require('../configs/db');

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT email, fullname, password FROM users", (err, result) => {
                if (!err) {
                    resolve(result)

                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    UsersDetail: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE id", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO users SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    login: (email) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE email = ?",email,  (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    updateUsers: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE users SET ? WHERE id= ?", [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteUsers: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}