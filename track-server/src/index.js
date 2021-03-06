require('./models/user');
require('./models/Track');
// import express library
const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser'); //helper library that auto parses info of incoming req
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');

const app = express();

//needs to be above authRoutes to proccess parse first
//then sends the parsed info to the req param
app.use(bodyParser.json()); 
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 
    'mongodb+srv://admin:testpassword@cluster0.ayzpq.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});