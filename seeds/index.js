const animalSeeds = require('./animals-seeds');
const userSeeds = require('./user-seeds');
const savedUsersSeeds = require('./saved-animals-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log("databasesynced")
    await userSeeds()
    console.log("userdataseeded")
    await animalSeeds()
    console.log("animal data seeded")
    await savedUsersSeeds()
    console.log("saved animals seeded");
}
seedAll()