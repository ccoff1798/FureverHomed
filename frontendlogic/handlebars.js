const HomepageLogic = require('../frontendlogic/homepage')
const Animals = require('../models/Animals')

async function getData() {
    const homePageLogic = new HomepageLogic()
    const homePageFetcher = await homePageLogic.initializeFetcher
    return homePageFetcher()
}

getData()
.then(function(response){
    for(let i = 0; i < response.length; i++)
    {
        parsedResponse = JSON.parse(response[i])
        console.log(parsedResponse.name)
        Animals.create({
            id: parsedResponse.id,
            name: parsedResponse.name,
            type: parsedResponse.type
        })
    }
})

