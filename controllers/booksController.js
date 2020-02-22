const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(foundBooks => res.json(foundBooks))
            .catch(err => res.status(404).json(err));
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then(newBook => res.json(newBook))
            .catch(err => res.status(404).json(err));
    }
}