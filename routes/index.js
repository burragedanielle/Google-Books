const path = require('path');
const router = require('express').Router();
const apiRoute = require('/api');

//API Route
// @desc takes us into API route file to find our three routes, books, google and index. 

router.use('/api/', apiRoute);

//No API Hit
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;

