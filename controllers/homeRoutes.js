const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const HomePageLogic = require('../public/frontendlogic/homepage');
const fetchTypes = require('../controllers/api/fetchRoutes')
const SearchLogic = require('../public/frontendlogic/search')

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

router.get('/profile', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('profile',{
    loggedIn: req.session.logged_in,
    user: req.session.user_id
  });
});

router.get('/logout', (req, res) => {
  if(!req.session.loggedIn){
    res.render('login')
  }
  req.session.logged_in = false
  res.render('homepage',{
    loggedIn: req.session.logged_in
  })
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  const searchLogic = new SearchLogic;
  try {
    const searchFetcher = await searchLogic.initializeFetchId(id)
    const [animal, created] = await Animals.findOrCreate({
      where: { id: searchFetcher.animal.id },
      defaults: {
        breeds: searchFetcher.animal.breeds,
        colors: searchFetcher.animal.colors,
        age: searchFetcher.animal.age,
        gender: searchFetcher.animal.gender,
        size: searchFetcher.animal.size,
        name: searchFetcher.animal.name,
        description: searchFetcher.animal.description,
        photos:searchFetcher.animal.photos,
        status: searchFetcher.animal.status,
        contact: searchFetcher.animal.contact,
        links: searchFetcher.animal._links,
        user_id: req.params.user_id
      }
    });
    if (created) {
      console.log('New animal was created!');
    } else {
      console.log('Animal already exists in the database.');
    }
    let photo = animal.dataValues.photos[1].full
    console.log(animal.dataValues.photos[1].full)
    res.render('searchById',{
      loggedIn: req.session.loggedIn,
      animal: animal,
      photo: photo
    })

    

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).render("404",{
    loggedIn: req.session.logged_in
    })
  }

})


router.get('/:id', async (req, res) => {
  let id = req.params.id;
  const searchLogic = new SearchLogic;

  try {
    const searchFetcher = await searchLogic.initializeFetchId(id);
    console.log(`This is the log from in Homeroutes  ${searchFetcher.animals}`);

    // Use the findOrCreate method provided by Sequelize
    const [animal, created] = await Animals.findOrCreate({
      where: { id: searchFetcher.animal.id },
      defaults: {
        breeds: searchFetcher.animal.breeds,
        colors: searchFetcher.animal.colors,
        age: searchFetcher.animal.age,
        gender: searchFetcher.animal.gender,
        size: searchFetcher.animal.size,
        name: searchFetcher.animal.name,
        description: searchFetcher.animal.description  // Added this line
      }
    });

    if (created) {
      console.log('New animal was created!');
    } else {
      console.log('Animal already exists in the database.');
    }

    // Continue with the rest of your logic

  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server error');
  }
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
// const dropDown = document.getElementById('animal_selection')
// dropDown.addEventListener('click', function(fetchTypes){

// });
module.exports = router;