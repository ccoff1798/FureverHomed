let type = "Dog"
// GET https://api.petfinder.com/v2/types/{type}
let breed = "French Bulldog"
// GET https://api.petfinder.com/v2/types/${type}/breeds/${breed}
let location = "Denver"
// GET https://api.petfinder.com/v2/animals/locations/${location}
let rescue = "DDFL"
// GET https://api.petfinder.com/v2/organizations/${name}



async function fetchTypes() {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/types/${type}`
        // ${breed}/${location}/${rescue}`
        console.log(url)
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
async function fetchBreeds() {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/breeds/${breed}`
        // ${breed}/${location}/${rescue}`
        console.log(url)
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
async function fetchLocation() {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/locations/${location}`
        // ${breed}/${location}/${rescue}`
        console.log(url)
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




async function fetchRescue() {
    const TokenFetcher = require('../../helpers/tokenFetcher');
try {
    const tokenFetcherInstance = new TokenFetcher();
    const tokenFetched = await tokenFetcherInstance.fetcher()
    const url = `https://api.petfinder.com/v2/organizations/${rescue}}`
    // ${breed}/${location}/${rescue}`

    console.log(url)
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
// function sortByBreed(data)
//     data.forEach(element => {

//     });


fetchTypes()
fetchBreeds()
fetchLocation()
fetchRescue()