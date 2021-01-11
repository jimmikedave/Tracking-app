const express = require('express');
// import mongoose model 
const mongoose = require('mogoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('You made a post request')
})

module.exports = router;