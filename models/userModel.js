const mongoose = require ("mongoose");

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }, 
    email: {
        type: String
    }, 
    address: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;