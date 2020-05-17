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
        const token = jwt.sign({id: result[0].id, email: result[0].email}, process.env.SECRET_KEY);
        const checkPass = compareSync(data.password, result[0].password)
        console.log(checkPass)
        if (checkPass === false) {
            MiscHelper.response(res, null, 202, 'Invalid Password!');
        } else {
            return res.json({
            success: 1,
            message: 'Login Success',
            result: result[0],
            token: token,
            })
        }
    })
    .catch(err => {
        MiscHelper.response(res, err, 202, 'Invalid Email');
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
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        status: 0,
        role_id: 1,
      }
      const salt = genSaltSync(10)
      data.password = hashSync(data.password, salt)
      userModel.register(data)
        .then((result) => {
          console.log(result);

          result.email = data.email
                const newresult = result;
                const token = jwt.sign({id: result.insertId ,email: result.email}, process.env.SECRET_KEY)
                newresult.token = token
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'harunastrade@gmail.com',
                        pass: '94321290ha',
                    }
                });
                const mailFrom = {
                    from: 'harunastrade@gmail.com',
                    to: 'pbharun59@gmail.com',
                    subject: 'verify your account',
                    html: '<p>Click <a href="http://localhost:8080/#/auth?activated=' + token+'">here</a></p>',
                };
                transporter.sendMail(mailFrom, (err, info) => {
                    if (err) {
                        console.log(err)
                        res.send('Email Activation Failed!')
                    } else {
                        const result = {
                            token: tokenactivate,
                            status: 'succes'
                        };
                        MiscHelper.response(res,result,200)
                    }
                })
                MiscHelper.response(res, newresult, 200, 'Register Succes, Please Check Your Email')
            })
            .catch(err => {
                MiscHelper.response(res, err, 201, 'Register Failed!')
            })
    },

        // })
        // .catch(err => console.log(err));
        // },
}


    // aktivasiuser: (req, res) => {
    //   const mailOptions = {
    //     from: '',
    //     to: email,
    //     subject: subject,
    //     text: 'That was easy!1'
    // }


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