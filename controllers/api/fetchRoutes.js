// async function fetchByAnimal(type) {
//     const TokenFetcher = require('../../helpers/tokenFetcher');

//     try {
//         const tokenFetcherInstance = new TokenFetcher();
//         const tokenFetched = await tokenFetcherInstance.fetcher()
//         console.log(tokenFetched)
//         //minor url change to fetch relevent data for front end
//         const url = `https://api.petfinder.com/v2/animals?type=${type}`
//         // ${breed}/${location}/${rescue}`
//         console.log(url)
//         const fetchedData = await fetch(url, {
//             headers: {
//                 'Authorization': 'Bearer ' + tokenFetched
//             }
//         })
//     .then(response => response.json())
//     console.log(response.json())
//     .then(response => response)

//     }
//     catch (error) {
//         console.log(error)
//     }

// };
// async function fetchTypes(type) {
//     const TokenFetcher = require('../../helpers/tokenFetcher');
//     try {


//     const tokenFetcherInstance = new TokenFetcher();
//         const tokenFetched = await tokenFetcherInstance.fetcher()
//         const url = `https://api.petfinder.com/v2/types/${type}`
//         console.log(url)
//         const fetchRequest = await fetch(url, {
//             headers: {
//                 'Authorization': 'Bearer ' + tokenFetched
//             }
//         })
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (data) {
//                 // sortByBreed(data)
//                 console.log(data)
//             })

//    }
//    catch (error) {
//       console.log(error)
//  }
//};
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

async function fetchByBreeds(type, breed, location = 'CO') {
    const TokenFetcher = require('../../helpers/tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&location=${location}
        `
        console.log(url)
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
            .then(response => response.json());
        return fetchRequest;


        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // };

        // 

        // async function fetchLocation(location, status) {
        //     const TokenFetcher = require('../../helpers/tokenFetcher');

        //     try {
        //         const tokenFetcherInstance = new TokenFetcher();
        //         const tokenFetched = await tokenFetcherInstance.fetcher()
        //         const url = `https://api.petfinder.com/v2/animals?${location}?status=${status}`

        //         const fetchRequest = await fetch(url, {
        //             headers: {
        //                 'Authorization': 'Bearer ' + tokenFetched
        //             }
        //         })
        //         .then(function (response) {
        //             return response.json()
        //         })


        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // };




        // async function fetchRescue(location) {
        //     const TokenFetcher = require('../../helpers/tokenFetcher');
        //     try {
        //         const tokenFetcherInstance = new TokenFetcher();
        //         const tokenFetched = await tokenFetcherInstance.fetcher()


        //         const fetchRequest = await fetch(`https://api.petfinder.com/v2/organizations?location=${location}`, {
        //             headers: {
        //                 'Authorization': 'Bearer ' + tokenFetched

        //             }
        //         })
        //         .then(function (response) {
        //             return response.json()
        //         })


        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // };

        // async function fetchByAnimals(animalType) {
        //     const TokenFetcher = require('../../helpers/tokenFetcher');
        //     console.log("About to fetch with type:", animalType);


        //     try {
        //         const tokenFetcherInstance = new TokenFetcher();
        //         const tokenFetched = await tokenFetcherInstance.fetcher()
        //         // console.log(tokenFetched)
        //         //minor url change to fetch relevent data for front end
        //         const url = `https://api.petfinder.com/v2/animals?type=${animalType}`
        //         console.log(url)
        //         const fetchedData = await fetch(url, {
        //             headers: {
        //                 'Authorization': 'Bearer ' + tokenFetched
        //             }
        //         }).then(response => response.json());
        //         // console.log(fetchedData)
        //         return fetchedData;

        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // };


        //    ------------------------------------------------------------------------------------
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
                    })
            }
            catch (error) {
                console.log(error)
            }
        };
        async function fetchByBreeds(breed, size, age, gender,) {
            const TokenFetcher = require('../../helpers/tokenFetcher');
            try {
                const tokenFetcherInstance = new TokenFetcher();
                const tokenFetched = await tokenFetcherInstance.fetcher()
                const url = `https://api.petfinder.com/v2/animals/?breed=${breed}`
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

                console.log(fetchRequest)
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
                        console.log(data)
                    })
            }
            catch (error) {
                console.log(error)
            }
        };
        // module.exports = fetchByAnimals, fetchByBreeds

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

        module.exports = { fetchByAnimals, fetchByBreeds, fetchBreeds,}
// function sortByBreed(data)
//     data.forEach(element => {
//     });
// fetchByAnimal("Rabbit") --not working
// fetchTypes("Rabbit") --Working***
// fetchBreeds("Cat")--Working***
// fetchByBreeds("French Bulldog")--Working***
// fetchById('69263772') --working, different from the others
// fetchLocation("Denver, CO",) --Working***
// fetchRescue("Arvada, CO") --Working***
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Results on code lines 1-198


// fetchTypes("Rabbit") --working
// fetchBreeds("Cat") --not working
// fetchByBreeds("French Bulldog") --not working 'Body is unusable'
// fetchLocation("Denver, CO",) --not working(?)
// fetchRescue("Arvada, CO") --not working(?)

