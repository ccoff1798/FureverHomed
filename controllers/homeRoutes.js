const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const HomePageLogic = require('../public/frontendlogic/homepage');

// Prevent non logged in users from viewing the homepage //withAuth
router.get('/', async (req, res) => {
//   try {\
  const homePageLogic = new HomePageLogic()
  const homePageFetcher = await homePageLogic.initializeFetcher
  homePageFetcher()
  
  res.render('homepage')
  

  
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });
// // code below is getting user data from user logged in password is excluded above and assigned to variable 'users'
//     const users = userData.map((project) => project.get({ plain: true }));
// // this is rendering home page with user logged in data previously gotten above.
//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       // logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;