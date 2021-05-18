
const router = require('express').Router()
const taksController = require('../controllers/taksController')

router.route('/')
    .get(taksController.get)
    .post(taksController.add)

router.route('/:id')
    .put(taksController.edit)
    .delete(taksController.delete)

module.exports = router