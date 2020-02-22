const path = require('path');
const router = require('express').Router();
const bookRoute = require('./books');
const googleRoute = require('./google');

// Book Return
router.use('/books', bookRoute);
// router.use('/google', googleRoute);

// If neither is hit... 
router.use((res, req) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router; 