const userModel = require('../models/user');
const MiscHelper = require('../helpers/helpers')
module.exports = {
    getUsers: (req, res) => {
        userModel.getUsers()
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },
    usersDetail: (req, res) => {
        const idUser = req.params.id_user
        userModel.userDetail(id_user)
            .then((resultUser) => {
                const result = resultUser
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
    updateUsers: (req, res) => {
        const idUser = req.params.id_user
        const {
            email,
            fullname,
            password
        } = req.body;
        const data = {
            email,
            fullname,
            password
        }
        usersModel.updateUser(idUser, data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    deleteUsers: (req, res) => {
        const id_user = req.params.id_user
        userModels.deleteUsers(id)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}