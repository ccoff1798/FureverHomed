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
SavedAnimal.belongsTo(User, {
    foreignKey: 'user_id',
})
SavedAnimal.belongsTo(Animals, {
    foreignKey: 'animal_id',
})

module.exports = { User, Animals, SavedAnimal };
