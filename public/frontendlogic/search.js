const fetchTypes = require('../../controllers/api/fetchRoutes_ copy')
const location = 'CO'//hardcoded location

class SearchLogic {
    constructor() {
        console.log("Search Logic Loaded");
    }

    async initializeFetcher(type) {
        try {
            const fetcher = await fetchTypes(type);//hardcoded location for testing
            console.log('fetchSuccess');
            console.log(fetcher)
            return fetcher;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}

module.exports = SearchLogic;

