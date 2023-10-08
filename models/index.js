const User = require('./User');
const Animals = require('./Animals');
const SavedAnimal = require('./SavedAnimal')

User.hasMany(SavedAnimal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Animals.belongsToMany(User, {
    through: SavedAnimal,
    foreignKey: 'animal_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Animals, SavedAnimal };
