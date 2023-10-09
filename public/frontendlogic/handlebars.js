import HomepageLogic from '/public/frontendlogic/homepage.js'
// import Animals from '../../models/Animals';


async function getData() {
    const homePageLogic = new HomepageLogic();
    const homePageFetcher = await homePageLogic.initializeFetcher;
    return homePageFetcher();
}

getData()
    .then(function(response) {
        const animalArray = [];
        for (let i = 0; i < response.length; i++) {
            parsedResponse = JSON.parse(response[i]);
            const animal = {
                id: parsedResponse.id,
                name: parsedResponse.name,
                type: parsedResponse.type,
            };
            animalArray.push(animal);
        }
        global.animalArray = animalArray;
        console.log(animalArray); // This will log the array
    })
    .catch(function(error) {
        console.error('Error:', error);
    });