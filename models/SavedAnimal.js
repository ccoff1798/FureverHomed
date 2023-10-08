const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SavedAnimal extends Model {
 
}

SavedAnimal.init(
  {
    id: {
        // type: DataTypes.INTEGER allows only allows numbers to be assigned to the id:, allowNull : false means data must be returned or error will appear, here value is coming from animal-seeds.js, autoincrement allows for incremental addition of all values following the first value. kind of like a for loop. name: type DataTypes.STRING only allows for data associated with name: as a string to be returned.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'saved_animal',
  }
);

module.exports = SavedAnimal;
