// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('API is live on http://localhost:3000/products');
});