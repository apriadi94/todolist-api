
const router = require('express').Router()
const subTaksController = require('../controllers/subTaksController')

router.route('/')
    .post(subTaksController.add)

router.route('/:id')
    .put(subTaksController.edit)
    .delete(subTaksController.delete)

module.exports = router