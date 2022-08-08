require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recordsRoutes = require('./routes/records.js');

// express app
const app = express();

// middleware
app.use(express.json()); //parse incoming requests with JSON payloads

// routes
app.use('/api/records', recordsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });
