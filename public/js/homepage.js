const {fetchLocation} = require('../../controllers/api/fetchRoutes')

class HomepageLogic {
    constructor() {
        console.log("Homepage Logic Loaded");
    }

    async initializeFetcher(location, status, page) {
        try {
            const fetcher = await fetchLocation(location, status, page);//hardcoded location for testing
            console.log('fetchSuccess');
            return fetcher;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}

module.exports = HomepageLogic;
