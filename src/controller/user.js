const { genSaltSync, compareSync, hashSync} = require('bcrypt')
const userModel = require('../models/user');
const MiscHelper = require('../helpers/helpers')
// const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')

module.exports = {
  login: (req, res) => {
    const { email, password} = req.body;
    const data = {
      email,
      password,
    }
    userModel.login(data.email)
    .then((result) => {
        const checkPass = compareSync(data.password, result[0].password)
        console.log(checkPass)
        if (checkPass) {
            MiscHelper.response(res, result, 200, 'Login Successfully!');
        } else {
            MiscHelper.response(res, null, 400, 'Invalid Password!');
        }
    })
    .catch(err => {
        MiscHelper.response(res, null, 400, 'Invalid Email');
    })
  },
  register: (req, res) => {
      const {
        email,
        fullname,
        password
      } = req.body;
      const data = {
        email,
        fullname,
        password,
        status: 0,
        role_id: 2,
      }
      const salt = genSaltSync(10)
      data.password = hashSync(data.password, salt)
      userModel.register(data)
        .then((result) => {
          res.send(result);
        })
        .catch(err => console.log(err));
        },
    // aktivasiuser: (req, res) => {
    //   const mailOptions = {
    //     from: '',
    //     to: email,
    //     subject: subject,
    //     text: 'That was easy!1'
    // }
}

// module.exports = {
//     getUsers: (req, res) => {
//         userModel.getUsers()
//             .then((resultUser) => {
//                 const result = resultUser
//                 MiscHelper.response(res, result, 200);
//             })
//             .catch(err => console.log(err));
//     },
//     usersDetail: (req, res) => {
//         const idUser = req.params.id_user
//         userModel.userDetail(id_user)
//             .then((resultUser) => {
//                 const result = resultUser
//                 MiscHelper.response(res, result, 200);
//             })
//             .catch(err => console.log(err));
//     },
//     insertUser: (req, res) => {
//         const {
//             email,
//             fullname,
//             password
//         } = req.body;
//         const data = {
//             email,
//             fullname,
//             password
//         }
//         userModel.insertUser(data)
//             .then((result) => {
//                 res.send(result);
//             })
//             .catch(err => console.log(err));
//     },
//     updateUsers: (req, res) => {
//         const idUser = req.params.id_user
//         const {
//             email,
//             fullname,
//             password
//         } = req.body;
//         const data = {
//             email,
//             fullname,
//             password
//         }
//         usersModel.updateUser(idUser, data)
//             .then((result) => {
//                 res.send(result);
//             })
//             .catch(err => console.log(err));
//     },
//     deleteUsers: (req, res) => {
//         const id_user = req.params.id_user
//         userModels.deleteUsers(id)
//             .then((resultUser) => {
//                 const result = resultUser
//                 MiscHelper.response(res, result, 200)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     },
//     loginUsers: (req, res) => {
//         const email = req.body.email
//         const password = req.body.password

//     }
// }