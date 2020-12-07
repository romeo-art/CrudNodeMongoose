const User = require('../models/userModel');

const express = require('express');

var router = express.Router();

// router.get('/', (req, res) => {
//     res.send('sample text');
// });

router.get('/', (req, res) => {
    res.sendFile("", __dirname + 'index.html');
});





const index = (req, res, next) => {
    User.find().then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    });
}

// const show = (req, res, next) => {
//     let userID
// }

const store = (req, res, next) => {
    let user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
    })
    user.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

module.exports = router, index, store;