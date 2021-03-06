const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Find All and Create New Books
// @For general book search 
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

// Finding a specific book
router.route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;