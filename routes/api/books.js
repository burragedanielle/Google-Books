const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Find All and Create New Books
// @For general book search 
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

router.route('/:id')
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;