const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




const app = express();
const port = 3000;
const UserRouter = require('./api/User');
const RideRouter = require('./api/Ride');

app.use(cors());

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter)
app.use('/ride', RideRouter)
app.listen(port, () => {
  console.log(`server running on port ${port}`);

})

