const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const urlencoded = require('body-parser').urlencoded;
const Promise = require('bluebird');
const config = require('./config');
const voice = require('./routes/voice');
const message = require('./routes/message');
const results = require('./routes/results');

// use node A+ promises
mongoose.Promise = Promise;

// check for connection string
if (!config.mongoUrl) {
  throw new Error('MONGO_URL env variable not set.');
}

let isConn;
// initialize MongoDB connection
if (mongoose.connections.length === 0) {
  mongoose.connect(config.mongoUrl);
} else {
  mongoose.connections.forEach(conn => {
    if (!conn.host) {
      isConn = false;
    }
  });

  if (isConn === false) {
    mongoose.connect(config.mongoUrl);
  }
}

// Create Express web app with some useful middleware
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));

// Twilio Webhook routes
app.post('/voice', voice.interview);
app.post('/voice/:responseId/transcribe/:questionIndex', voice.transcription);
app.post('/message', message);

// Ajax route to aggregate response data for the UI
app.get('/results', results);

module.exports = app;
