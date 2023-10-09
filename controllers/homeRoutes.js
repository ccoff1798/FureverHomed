const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// users not logged in will be sent to home page to login. 
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });
// code below is getting user data from user logged in password is excluded above and assigned to variable 'users'
    const users = userData.map((project) => project.get({ plain: true }));
// this is rendering home page with user logged in data previously gotten above.
    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
