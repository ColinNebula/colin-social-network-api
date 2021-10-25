// Import Express
const express = require('express');
// Import Mongoose
const mongoose = require('mongoose');


// Port Used
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));


// Listen with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// Listen for connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));