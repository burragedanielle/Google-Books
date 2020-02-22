const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
// const root = path.join(__dirname, 'client', 'build')
// app.use(express.static(root));

// Routes
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});
app.use('/search', routes);

//Backend Setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/heroku_pbdk8gz9';

console.log('This is the Mongo URI', MONGODB_URI);

mongoose.connect(MONGODB_URI),
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongo connection error:'));

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});


