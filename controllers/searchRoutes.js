const router = require('express').Router();
const SearchLogic = require('../public/frontendlogic/search');


router.get('/:id', async (req, res) => {
    let type = req.params.id
    type = type.replace(/"/g, '')
    const searchLogic = new SearchLogic;
    
    
    try {
      console.log(`search route type ${type}`)
      const searchFetcher = await searchLogic.initializeFetcher(type);
      // console.log(type)
      // console.log(typeof searchFetcher)
    //   const parsedArray = searchFetcher.map(item => JSON.parse(item));
  
      const pets = {};
      // console.log(`This is what I am console Logging${searchFetcher.animals}`)
      console.log("searchFetcher:", searchFetcher);
      if (searchFetcher && searchFetcher.animals) {
    
      for (let i = 0; i < searchFetcher.animals.length; i++) {
          pets['pet' + i] = {
              id: searchFetcher.animals[i].id,
              name: searchFetcher.animals[i].name,
              type: searchFetcher.animals[i].type,
              imageUrl: searchFetcher.animals[i].primary_photo_cropped 
          };
      }} else {
        console.error("searchFetcher or searchFetcher.animals is undefined or null");
     }
      
  
      res.render("searchResults", {
        loggedIn: req.session.logged_in,
        pets: pets
      });
    } catch (error) {
      // Handle the error here
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

  module.exports = router;