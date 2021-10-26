// Import Express
const express = require('express');
// Import Mongoose
const mongoose = require('mongoose');


// Port Used
const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models');

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

app.post('/submit', ({ body }, res) => {
  const user = new User(body);

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/users', (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

// Listen for connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));