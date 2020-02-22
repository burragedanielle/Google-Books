const router = require('express').Router();
const googleController = require('../../controllers/googleController');

//For gathering books from Google
// @ if /api/google is hit


router.route('/')
    .get(googleController.findAll);

module.exports = router;