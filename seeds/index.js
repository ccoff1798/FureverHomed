const animalSeeds = require('./animals-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log("databasesynced")
    await animalSeeds()
    console.log("animal data seeded")
}
seedAll()