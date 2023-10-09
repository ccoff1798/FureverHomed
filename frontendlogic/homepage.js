const fetchData= require('../helpers/testrun');
const location = 'CO'//hardcoded location

class HomepageLogic {
    constructor() {
        console.log("Homepage Logic Loaded");
    }

    async initializeFetcher() {
        try {
            const fetcher = await fetchData(location);//hardcoded location for testing
            console.log('fetchSuccess');
            // console.log(fetcher)
            return fetcher;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}

module.exports = HomepageLogic;
