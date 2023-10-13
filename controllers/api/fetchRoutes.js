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
        console.log(`fetch request is ${fetchRequest}`)
        return fetchRequest
    }
    catch (error) {
        console.log(error)
    }
};
async function fetchByBreeds(type, breed, location = 'CO', page = 1) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&location=${location}&page=${page}`
        console.log(url)
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(response => response.json());
        return fetchRequest;
    }
    catch (error) {
        console.log(error)
    }
};
async function fetchTypes(type) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/types/${type}`
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
                console.log(data)
            })
        return fetchRequest
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
                console.log(data)
                return data
            })
        return fetchRequest
    }
    catch (error) {
        console.log(error)
    }
};
async function fetchById(id) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals/${id}`
        console.log(url)
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(response => response.json())
            .then(response => response)
        return fetchRequest
    }
    catch (error) {
        console.log(error)
    }
};
async function fetchLocation(location, status) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals?${location}?status=${status}`
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
                console.log(data)
            })
        return fetchRequest
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
                console.log(data)
            })
        return fetchRequest
    }
    catch (error) {
        console.log(error)
    }
};
async function fetchByAnimals(animalType, location = "co", page = 1) {
    const TokenFetcher = require('../../helpers/tokenFetcher');
    console.log("About to fetch with type:", animalType);
    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals?type=${animalType}&location=${location}&page=${page}`
        console.log(url)
        const fetchedData = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        }).then(response => response.json());
        return fetchedData;

    }
    catch (error) {
        console.log(error)
    }
};
module.exports = { fetchByAnimals, fetchByBreeds, fetchBreeds, fetchById }