const thoughtRoutes = require('./thought-routes');
const router = require('express').Router();
const userRoutes = require('./user-routes');


// add prefix of `/user` to routes 
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);


module.exports = router;