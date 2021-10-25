const router = require('express').Router();
// Import all of the API routes from /api/index.js 
const apiRoutes = require('./api');
const User = require('./User');
const Thought = require('./Thought');

// add prefix of `/api` to all of the api routes 
router.use('/api', apiRoutes);

// Export 
module.exports = { User, Thought, router };

