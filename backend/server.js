require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recordsRoutes = require('./routes/records.js');
const userRoutes = require('./routes/user');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json()); //parse incoming requests with JSON payloads

// routes
app.use('/api/records', recordsRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT || 4000, () => {
      console.log('listening for requests on port~', process.env.PORT || 4000);
    });
  })
  .catch(err => {
    console.log(err);
  });
