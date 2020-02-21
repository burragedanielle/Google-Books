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
if (process.env.Node_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use('/api/', routes);

//Backend Setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googleBooksDB',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongo connection error:'));

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});


