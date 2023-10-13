const router = require('express').Router();
const SearchLogic = require('../public/frontendlogic/search');


router.get('/:id', async (req, res) => {
    let type = req.params.id
    type = type.replace(/"/g, '')
    const searchLogic = new SearchLogic;
    
    
    try {
      console.log(`search route type ${type}`)
      const searchFetcher = await searchLogic.initializeFetcher(type)
     
      // console.log(type)
      console.log(`this is ${searchFetcher}`)
      
    //   const parsedArray = searchFetcher.map(item => JSON.parse(item));
      const breeds = {}
      // for (let i = 0; i < breedFetcher.length; i++){

      // }
      const pets = {};
      // console.log(`This is what I am console Logging${searchFetcher.animals}`)
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
        // console.log(photos)
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
     console.log(`breedFetcher is ${breedFetcher.breeds[1].name}`)
     for (let i = 0; i < breedFetcher.breeds.length; i++){
      breeds['breed'+ i] = {
        breed : breedFetcher.breeds[i].name
      }
     }
    //  console.log(`breedfetcher stringified ${JSON.stringify(breedFetcher)}`)
      
  
      res.render("searchResults", {
        loggedIn: req.session.logged_in,
        pets: pets,
        breeds : breeds
      });
    } catch (error) {
      // Handle the error here
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  module.exports = router;