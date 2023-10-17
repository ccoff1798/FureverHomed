const {fetchByAnimals, fetchBreeds, fetchByBreeds, fetchById} = require('../../controllers/api/fetchRoutes')
const location = 'CO'//hardcoded location

class SearchLogic {
    constructor() {
        console.log("Search Logic Loaded");
    }

    async initializeFetcher(animalType, location) {
        try {
            console.log(`intialize fetcher type ${animalType}`)
            const fetcher = fetchByAnimals(animalType, location, page);
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
        console.log(`BreedFetcher is pulling ${fetcher}`)
        return fetcher
        } catch (error) {
          console.log(error)  
          throw error;
        }
        
    }

    async initializeFetchByBreed(animalType, animalBreed, location, page){
        try {
            console.log(`fetching type`)
        const fetcher = fetchByBreeds(animalType, animalBreed, location, page)
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
        console.log(`this is fetcher${fetcher}`)
        return fetcher
        } catch (error) {
          console.log(error)  
          throw error;
        }
        
    }


}

module.exports = SearchLogic;

