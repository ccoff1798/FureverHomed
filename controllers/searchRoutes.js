const router = require('express').Router();
const SearchLogic = require('../public/frontendlogic/search');


router.get('/:id/', async (req, res) => {
    let type = req.params.id
    type = type.replace(/"/g, '')
    const searchLogic = new SearchLogic;
    try {
      console.log(`search route type ${type}`)
      const searchFetcher = await searchLogic.initializeFetcher(type)
      console.log(`this is ${searchFetcher}`)
      const breeds = {}
      const pets = {};
      if (searchFetcher && searchFetcher.animals) {
      for (let i = 0; i < searchFetcher.animals.length; i++) {
        
        let photos = searchFetcher.animals[i].primary_photo_cropped
        if(photos == null || undefined){
          photos = searchFetcher.animals[i].photos
          if(photos.length == 0){
            photos = "../public/images/placeholder.jpg"
          }
        }
        else{
         photos = searchFetcher.animals[i].primary_photo_cropped.full
        }
          pets['pet' + i] = {
              id: searchFetcher.animals[i].id,
              name: searchFetcher.animals[i].name,
              type: searchFetcher.animals[i].type,
              description: searchFetcher.animals[i].description,
              imageUrl: photos
          };
      }} else {
        console.error("searchFetcher or searchFetcher.animals is undefined or null");
     }
     const breedFetcher = await searchLogic.initializeBreedFetcher(type)
     console.log(type);
     console.log(breedFetcher)
     for (let i = 0; i < breedFetcher.breeds.length; i++){
      breeds['breed'+ i] = {
        breed : breedFetcher.breeds[i].name
      }
     }
      res.render("searchResults", {
        loggedIn: req.session.logged_in,
        pets: pets,
        breeds : breeds,
        type: type
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  module.exports = router;


  router.get('/:id/:breed/', async (req, res) => {
    let type = req.params.id
    let breed = req.params.breed
    let location;
    if(req.query.location !== null){
    location = req.query.location
    }else{
    location = req.body.location
    }
    const searchLogic = new SearchLogic;
    const pets = {}
    const breeds ={}

    try {
      const breedFetcher = await searchLogic.initializeFetchByBreed(type, breed, location)
      for (let i = 0; i < breedFetcher.animals.length; i++) {
        
        let photos = breedFetcher.animals[i].primary_photo_cropped
        if(photos == null || undefined){
          photos = breedFetcher.animals[i].photos
          if(photos.length == 0){
            photos = "https://c8.alamy.com/comp/EKC44N/placeholder-banner-dog-EKC44N.jpg"
          }
        }
        else{
         photos = breedFetcher.animals[i].primary_photo_cropped.full
        }
          pets['pet' + i] = {
              id: breedFetcher.animals[i].id,
              name: breedFetcher.animals[i].name,
              type: breedFetcher.animals[i].type,
              description: breedFetcher.animals[i].description,
              imageUrl: photos
          };
    }
    const breedsFetcher = await searchLogic.initializeBreedFetcher(type)
     console.log(type);
     console.log(`breedsFetcher is ${breedsFetcher.breeds[1].name}`)
     for (let i = 0; i < breedsFetcher.breeds.length; i++){
      breeds['breed'+ i] = {
        breed : breedsFetcher.breeds[i].name
      }}
    res.render("searchResultsByBreed", {
      loggedIn: req.session.logged_in,
      pets: pets,
      type: type,
      breeds: breeds,
      breed: breed
    });
  } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }

  })