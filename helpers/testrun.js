async function fetchData(location) {
    const TokenFetcher = require('./tokenFetcher');

    try {
        const tokenFetcherInstance = new TokenFetcher();
        const tokenFetched = await tokenFetcherInstance.fetcher()
        const url = `https://api.petfinder.com/v2/animals/?location=${location}`
        const fetchRequest = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + tokenFetched
            }
        })
        const animalArray = []
        const data = await fetchRequest.json()
        //pushing data into an array
        for(let i = 0; i < data.animals.length; i++){
            // animalArray.push('id:',data.animals[i].id)
            // animalArray.push('name:',data.animals[i].name)
            // animalArray.push('type:', data.animals[i].type)
            const animalObject ={
                id : data.animals[i].id,
                name : data.animals[i].name,
                type : data.animals[i].type,
                photo : data.animals[i].primary_photo_cropped,
                url : data.animals[i].url
            }
            animalArray.push(JSON.stringify(animalObject))

        }
        // console.log(animalArray)
        return animalArray
        

    }
    catch (error) {
        console.log(error)
    }
};


module.exports = fetchData