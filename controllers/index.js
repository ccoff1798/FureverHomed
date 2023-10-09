// router method within express imported to allow for various methods involving routes
const router = require('express').Router();
// importing routes from api folder and the homeRoutes file
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const animalRoutes = require('./animalsRoutes')
// line 7 imports from homeRoutes endpoint if theres nothing defined after default url. line 8 /api calls for using apiRoutes endpoint. Once /api calls for using apiRoutes next file that loads will be index.js
router.use('/', homeRoutes);
router.use('/animals', animalRoutes)
router.use('/api', apiRoutes);

module.exports = router;
