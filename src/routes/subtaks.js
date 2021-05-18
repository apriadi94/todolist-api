
const router = require('express').Router()
const subTaksController = require('../controllers/subTaksController')

router.route('/')
    .post(subTaksController.add)


module.exports = router