// Import Mongoose
const mongoose = require('mongoose');
const express = require('express');

// Port Used
const app = express();
const PORT = process.env.PORT || 3001;

// Listen with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/colin-social-network-api', {
  //useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// Listen for connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));