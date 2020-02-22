const axios = require('axios');
const db = require('../models');

// this controller ensures that... 
// 1. We can access API
// 2. that every datapoint we catch includes the information we are looking for
// 3. that there are no repeats from saved books
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;

        axios.get('https://www.googleapis.com/books/v1/volumes', { params })
            .then(results =>
                results.data.items.filter(result =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(foundBooks =>
                db.Book.find().then(dbBooks =>
                    foundBooks.filter(foundBook =>
                        dbBooks.every(dbBook => dbBook.googleID.toString() !== foundBook.googleID)
                    )
                )
            )
            .then(bookInfo => res.json(bookInfo))
            .catch(err => res.status(404).json(err));
    }
};