const { SavedAnimal } = require('../models')
const savedAnimalData = [
    {
        "user_id": 1,
        "animal_id": 1
    }
];

const seedSavedAnimals = () => SavedAnimal.bulkCreate(savedAnimalData)
module.exports = seedSavedAnimals;