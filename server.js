require ("./models/db");

const express = require ('express');

var app = express(); 

var userController = require('./controllers/userController');

app.listen(3000, () => {
    console.log("Express server started at port: 3000");
})

app.use('/user', userController);