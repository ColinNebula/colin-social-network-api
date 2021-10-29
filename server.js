// Import Express
const express = require('express');
// Import Mongoose
const mongoose = require('mongoose');


// Port Used
const app = express();
const PORT = process.env.PORT || 3001;

const { User, Thought } = require('./models');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/colin-social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.use(require('./routes'));


// Listen for connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));