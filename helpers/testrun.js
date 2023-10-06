
async function fetchData() {
    const TokenFetcher = require('./tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = tokenFetcherInstance.token
        const url = 'https://api.petfinder.com/v2/animals/'
        const urlHeaders = `'Authorization': 'Bearer ${tokenFetched}'`
        console.log(token)
        const fetchRequest = await fetch(url, {
            headers: {
                urlHeaders
            }
        })
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (data) {
        //     console.log(data)
        // });
        const data = await fetchRequest.json()
        console.log(data)

    }
    catch (error) {
        console.log(error)
    }
};

console.log(fetchData())