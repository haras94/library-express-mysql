const categoryModel = require('../models/category');
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((resultCategory) => {
                const result = resultCategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err);
            })
    },
    categoryDetail: (req, res) => {
        id_category = req.params.id
        categoryModel.categoryDetail(id_category)
            .then((resultCategory) => {
                const result = resultCategory
                MiscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err);
            })

    },
    insertCategory: (req, res) => {
        const {
            name
        } = req.body;
        const data = {
            name
        }
        categoryModel.insertCategory(data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    updateCategory: (req, res) => {
        const id = req.params.id
        const data = {
            name: req.body.name
        }
        categoryModel.updateCategory(id, data)
            .then((resultCategory) => {
                const result = resultCategory
                MiscHelper.response(res, result, 200, [id, data])
            })
            .catch((err) => {
                console.log(err);
            })
    },
    deleteCategory: (req, res) => {
        const id = req.params.id
        categoryModel.deleteCategory(id)
            .then((resultCategory) => {
                const result = resultCategory
                MiscHelper.response(res, result, 200, [id])
            })
            .catch((err) => {
                console.log(err);
            })
    }
}