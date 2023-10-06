
async function fetchData() {
    const TokenFetcher = require('./tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = 'https://api.petfinder.com/v2/animals/'
        console.log(urlHeaders)
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })

        const data = await fetchRequest.json()
        console.log(data)

    }
    catch (error) {
        console.log(error)
    }
};

console.log(fetchData())