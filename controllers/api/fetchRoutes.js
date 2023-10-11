
async function fetchTypes(type) {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {

        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/types/${type}`
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(function (response) {
                console.log(response.json)
                return response.json()
            })
            .then(function (data) {
                // sortByBreed(data)
                // console.log(data)
            })

    }
    catch (error) {
        console.log(error)
    }
};
async function fetchBreeds(type) {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/types/${type}/breeds`
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // sortByBreed(data)
                console.log(data)
            })

    }
    catch (error) {
        console.log(error)
    }
};
async function fetchLocation(location, status, gender) {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals?${location}?status=${status}?${gender}`
        
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // sortByBreed(data)
                console.log(data)
            })

    }
    catch (error) {
        console.log(error)
    }
};




async function fetchRescue(location) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
try {
    const tokenFetcherInstance = new TokenFetcher();
    const tokenFetched = await tokenFetcherInstance.fetcher()


    const fetchRequest = await fetch(`https://api.petfinder.com/v2/organizations?location=${location}`, {
        headers: {
            'Authorization': 'Bearer ' + tokenFetched

        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // sortByBreed(data)
            // console.log(data)
        })

}
catch (error) {
    console.log(error)
}
};

async function fetchByAnimals(animalType) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    console.log("About to fetch with type:", animalType);


    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        // console.log(tokenFetched)
        //minor url change to fetch relevent data for front end
        const url = `https://api.petfinder.com/v2/animals?type=${animalType}`
        // ${breed}/${location}/${rescue}`
        console.log(url)
        const fetchedData = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        }).then(response => response.json());
        // console.log(fetchedData)
        return fetchedData;

    }
    catch (error) {
        console.log(error)
    }
};

module.exports = fetchByAnimals
// function sortByBreed(data)
//     data.forEach(element => {

//     });


// fetchTypes("dog")
// fetchBreeds("Cat")
// fetchLocation("Denver, CO",)
// fetchRescue("Arvada, CO")