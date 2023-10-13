const {fetchByAnimals, fetchBreeds, fetchByBreeds, fetchById} = require('../../controllers/api/fetchRoutes')
const location = 'CO'//hardcoded location

class SearchLogic {
    constructor() {
        console.log("Search Logic Loaded");
    }

    async initializeFetcher(animalType, location = 'CO') {
        try {
            console.log(`intialize fetcher type ${animalType}`)
            const fetcher = fetchByAnimals(animalType);//hardcoded location for testing
            console.log('fetchSuccess');
            // console.log(fetcher)
            return fetcher;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
    async initializeBreedFetcher(animalType){
        try {
            console.log(`fetching type`)
        const fetcher = fetchBreeds(animalType)
        return fetcher
        } catch (error) {
          console.log(error)  
          throw error;
        }
        
    }

    async initializeFetchByBreed(animalType, animalBreed, location = 'CO'){
        try {
            console.log(`fetching type`)
        const fetcher = fetchByBreeds(animalType, animalBreed, location)
        console.log(`this is fetcher${fetcher}`)
        return fetcher
        } catch (error) {
          console.log(error)  
          throw error;
        }
        
    }
    async initializeFetchId(id){
        try {
            console.log(`fetching type`)
        const fetcher = fetchById(id)
        return fetcher
        } catch (error) {
          console.log(error) 
          throw error;
        }
        
    }



}

module.exports = SearchLogic;

