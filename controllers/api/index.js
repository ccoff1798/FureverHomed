const router = require('express').Router();
// importing endpoints to be used below
const userRoutes = require('./userRoutes');
const animalsRoutes = require('./animalRoutes')
// /users calls for userRoutes endpoint and /animals calls for animalRoutes end point.
router.use('/users', userRoutes);
router.use('/animals', animalsRoutes);

module.exports = router;
