const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const HomePageLogic = require('../public/frontendlogic/homepage');
const fetchTypes = require('../controllers/api/fetchRoutes')

// Prevent non logged in users from viewing the homepage //withAuth
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const homePageLogic = new HomePageLogic();
//     const homePageFetcher = await homePageLogic.initializeFetcher(); // Assuming this is a function
//     homePageFetcher();

//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((user) => user.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       // logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//CODY's HANDLEBARS ROUTES FOR HOMEPAGE
// landing page that does not require for anyone to be logged in
router.get('/', async (req, res) => {
  const homePageLogic = new HomePageLogic();
  
  try {
    const homePageFetcher = await homePageLogic.initializeFetcher();
    
    const parsedArray = homePageFetcher.map(item => JSON.parse(item));

    const pets = {};

    for (let i = 0; i < parsedArray.length; i++) {
        pets['pet' + i] = {
            id: parsedArray[i].id,
            name: parsedArray[i].name,
            type: parsedArray[i].type,
            imageUrl: parsedArray[i].photo?.medium 
        };
    }
    
    console.log(pets);

    

    res.render("homepage", {
      loggedIn: req.session.logged_in,
      pets: pets
    });
  } catch (error) {
    // Handle the error here
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// //lisatest
// // users not logged in will be sent to home page to login. 
// router.get('/test', withAuth, async (req, res) => {
//   try {
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
//       loggedIn: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// =======
const dropDown = document.getElementById('animal_selection')
dropDown.addEventListener('click', function(fetchTypes){

});
module.exports = router;