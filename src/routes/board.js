
const router = require('express').Router()
const boardController = require('../controllers/boardController')

router.route('/')
    .get(boardController.get)
    .post(boardController.add)

router.route('/:id')
    .get(boardController.getById)
    .put(boardController.edit)
    .delete(boardController.delete)

module.exports = router