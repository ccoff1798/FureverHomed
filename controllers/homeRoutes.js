const router = require('express').Router();
const { User, Animals, SavedAnimal, Message } = require('../models');
const withAuth = require('../utils/auth');
const HomePageLogic = require('../public/js/homepage');
const fetchTypes = require('../controllers/api/fetchRoutes')
const SearchLogic = require('../public/js/search')

router.get('/', async (req, res) => {
  const homePageLogic = new HomePageLogic();
  let location = req.query.location || "80022";
  let status = req.query.status || "adoptable";
  let page = req.query.page || 1;



  try {
    const homePageFetcher = await homePageLogic.initializeFetcher(location, status, page);

    // const parsedArray = homePageFetcher.map(item => JSON.parse(item));

    const pets = {};
    for (let i = 0; i < homePageFetcher.animals.length; i++) {
      let photos = homePageFetcher.animals[i].primary_photo_cropped
      if (photos == null || undefined) {
        photos = homePageFetcher.animals[i].photos
        if (photos.length == 0) {
          photos = "https://c8.alamy.com/comp/EKC44N/placeholder-banner-dog-EKC44N.jpg"
        }
      }
      else {
        photos = homePageFetcher.animals[i].primary_photo_cropped.full
      }
      pets['pet' + i] = {
        id: homePageFetcher.animals[i].id,
        name: homePageFetcher.animals[i].name,
        type: homePageFetcher.animals[i].type,
        description: homePageFetcher.animals[i].description,
        imageUrl: photos
      };

    }

    // console.log(pets);



    res.render("homepage", {
      loggedIn: req.session.logged_in,
      pets: pets,
    });
  } catch (error) {
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

  res.render('profile', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id
  });
});

router.get('/logout', (req, res) => {
  if (!req.session.loggedIn) {
    res.render('login')
  }
  req.session.logged_in = false
  res.render('homepage', {
    loggedIn: req.session.logged_in
  })
})

router.get('/id/:id', async (req, res) => {
  let id = req.params.id
  const searchLogic = new SearchLogic;
  try {
    const searchFetcher = await searchLogic.initializeFetchId(id)
    let correctedDescription
    if (searchFetcher.animal.description) {
      correctedDescription = searchFetcher.animal.description.replace("&#039;", "'")
    }
    else {
      correctedDescription = "Still Gathering Description"
    }
    let photo;
    if (searchFetcher.animal.primary_photo_cropped !== null) {
      photo = searchFetcher.animal.primary_photo_cropped.full;
    } else {

      console.log('"primary_photo_cropped" does not exist.');
      if (searchFetcher.animal.photos.length == 0) {
        photo = "https://c8.alamy.com/comp/EKC44N/placeholder-banner-dog-EKC44N.jpg"
      }
      else {
        photo = searchFetcher.animal.photos[1]
      }
    }

    const animalUrl = searchFetcher.animal.url
    const [animal, created] = await Animals.findOrCreate({
      where: { id: searchFetcher.animal.id },
      defaults: {
        // id: searchFetcher.animal.id,
        breeds: searchFetcher.animal.breeds,
        colors: searchFetcher.animal.colors,
        age: searchFetcher.animal.age,
        gender: searchFetcher.animal.gender,
        size: searchFetcher.animal.size,
        name: searchFetcher.animal.name,
        description: correctedDescription,
        photos: photo,
        status: searchFetcher.animal.status,
        contact: searchFetcher.animal.contact,
        user_id: req.session.user_id,
      }
    });
    if (created) {
      console.log('New animal was created!');
      retrievedAnimal = await Animals.findByPk(searchFetcher.animal.id)

    } else {
      retrievedAnimal = animal;
    }

    // console.log(animal.dataValues.photos[1].full)
    res.render('searchById', {
      loggedIn: req.session.loggedIn,
      animal: animal,
      photo: photo,
      url: animalUrl
    })



  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).render("404", {
      loggedIn: req.session.logged_in
    })
  }

})
router.get('/save/:id', withAuth, async (req, res) => {
  const searchLogic = new SearchLogic();
  console.log(`USER ID IS ${req.session.user_id}`);

  // Using a more descriptive name
  let animalId = req.params.id;

  if (isNaN(animalId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const searchFetcher = await searchLogic.initializeFetchId(animalId);
    let correctedDescription = searchFetcher.animal.description
      ? searchFetcher.animal.description.replace("&#039;", "'")
      : "Still Gathering Description";

    const animalUrl = searchFetcher.animal.url;

    const [animal, created] = await Animals.findOrCreate({

      where: { id: searchFetcher.animal.id },
      defaults: {
        // id: searchFetcher.animal.id,
        breeds: searchFetcher.animal.breeds,
        colors: searchFetcher.animal.colors,
        age: searchFetcher.animal.age,
        gender: searchFetcher.animal.gender,
        size: searchFetcher.animal.size,
        name: searchFetcher.animal.name,
        description: correctedDescription,
        // photos:searchFetcher.animal.photos,
        status: searchFetcher.animal.status,
        contact: searchFetcher.animal.contact,
        user_id: req.session.user_id,
      }
    });


    if (created) {
      console.log('New animal was created!');
      retrievedAnimal = await Animals.findByPk(animalId);
    } else {
      retrievedAnimal = animal;
    }


    let photo;
    if (searchFetcher.animal.primary_photo_cropped !== null) {
      photo = searchFetcher.animal.primary_photo_cropped.full;
    } else {

      console.log('"primary_photo_cropped" does not exist.');
      if (searchFetcher.animal.photos.length == 0) {
        photo = "https://c8.alamy.com/comp/EKC44N/placeholder-banner-dog-EKC44N.jpg"
      }
      else {
        photo = searchFetcher.animal.photos[1]
      }
    }
    const [savedAnimalInstance, wasCreated] = await SavedAnimal.findOrCreate({
      where: { id: retrievedAnimal.dataValues.id },
      defaults: { user_id: req.session.user_id }
    });

    console.log(`This is the saved Animal:`, savedAnimalInstance.get());
    console.log(`Was the animal created?:`, wasCreated);


    res.render('searchById', {
      loggedIn: req.session.loggedIn,
      animal: retrievedAnimal,
      photo: photo,
      url: animalUrl
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).render("404", {
      loggedIn: req.session.loggedIn
    });
  }
});

router.post('/save/:id', withAuth, async (req, res) => {
  const animalId = req.params.id;

  try {
    const retrievedAnimal = await Animals.findByPk(animalId);
    if (!retrievedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }

    const [savedAnimalInstance, wasCreated] = await SavedAnimal.findOrCreate({
      where: { id: retrievedAnimal.dataValues.id },
      defaults: { user_id: req.session.user_id }
    });

    console.log(`This is the saved Animal:`, savedAnimalInstance.get());
    console.log(`Was the animal created?:`, wasCreated);

    res.status(200).json({ message: 'Animal processed successfully', wasCreated: wasCreated });

  } catch (error) {
    alert('log in to save an animal')
    console.error("Error fetching data:", error);
    res.status(500).render("404", {
      loggedIn: req.session.loggedIn
    });
  }
});

router.delete('/save/:id', withAuth, async (req, res) => {
  const animalId = req.params.id;
  try {
      await SavedAnimal.destroy({ where: { id: animalId } });  
      res.json({ message: 'Animal deleted successfully.' });
  } catch (error) {
      console.error("Error deleting the animal:", error);
      res.status(500).json({ message: 'Error deleting the animal.' });
  }
});

router.get('/story', (req, res) => {
  req.session.logged_in = false
  res.render('story', {
    loggedIn: req.session.logged_in
  })
})

router.get('/contact', (req, res) => {
  req.session.logged_in = false
  res.render('contactform', {
    loggedIn: req.session.logged_in
  })
})

router.post('/send',  async (req, res) => {
  try {
    console.log(req.body)
    const newMessage = await Message.create({
      name: req.body.name,
      message: req.body.message,
      email: req.body.email, 
    });

    console.log(newMessage);
    res.json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.get('/profile', (req, res) => {
  console.log( `req.session is${req.session}`)
  res.render('profile', {
    loggedIn: req.session.logged_in,
    user_id: req.session.user_id
  })
})

module.exports = router;