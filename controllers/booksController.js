const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(foundBooks => res.json(foundBooks))
            .catch(err => res.status(404).json(err));
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then(foundBook => res.json(foundBook))
            .catch(err => res.status(404).json(err));
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then(newBook => res.json(newBook))
            .catch(err => res.status(404).json(err));
    },

}