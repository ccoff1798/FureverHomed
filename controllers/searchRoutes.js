const router = require('express').Router();
const SearchLogic = require('../public/frontendlogic/search');


router.get('/:id', async (req, res) => {
    const type = req.params.id
    const searchLogic = new SearchLogic();
    
    
    try {
      const searchFetcher = await searchLogic.initializeFetcher(req.params.id);
      console.log(type)
      console.log(typeof searchFetcher)
    //   const parsedArray = searchFetcher.map(item => JSON.parse(item));
  
      const pets = {};
  
      for (let i = 0; i < searchFetcher.animals.length; i++) {
          pets['pet' + i] = {
              id: searchFetcher.animals[i].id,
              name: searchFetcher.animals[i].name,
              type: searchFetcher.animals[i].type,
              imageUrl: searchFetcher.animals[i].photo?.medium 
          };
      }
    //   for (let i = 0; i < parsedArray.length; i++) {
    //     pets['pet' + i] = {
    //         id: parsedArray[i].id,
    //         name: parsedArray[i].name,
    //         type: parsedArray[i].type,
    //         imageUrl: parsedArray[i].photo?.medium 
    //     };
    // }
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
  

  module.exports = router;