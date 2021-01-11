const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, //mongoose will understand it is unique cant duplicate
        required: true //if no email = invalid
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);