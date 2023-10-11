const { SavedAnimal } = require('../models')
const savedAnimalData = [
   
];

const seedSavedAnimals = () => SavedAnimal.bulkCreate(savedAnimalData)
module.exports = seedSavedAnimals;