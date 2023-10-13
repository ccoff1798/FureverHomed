
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
                // sortByBreed(data)
                console.log(data)
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
            // .then(function (data) {
            //     // sortByBreed(data)
            //     // console.log(data)
            //     return data
            // })
            console.log(`fetch request is ${fetchRequest}`)
            return fetchRequest
    }
    
    catch (error) {
        console.log(error)
    }
};

async function fetchByBreeds(breed, size, age, gender, ) {
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

        const url = `https://api.petfinder.com/v2/animals?${location}?status=${status}`
        
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
        const url = `https://api.petfinder.com/v2/animals?type=${animalType}`
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

module.exports = {fetchByAnimals , fetchByBreeds , fetchBreeds}
// function sortByBreed(data)
//     data.forEach(element => {

//     });



// fetchLocation("Denver, CO",)
// fetchRescue("Arvada, CO")

