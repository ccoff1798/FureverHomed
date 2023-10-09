const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Animals extends Model {
 
}

Animals.init(
  {
    id: {
        // type: DataTypes.INTEGER allows only allows numbers to be assigned to the id:, allowNull : false means data must be returned or error will appear, here value is coming from animal-seeds.js, autoincrement allows for incremental addition of all values following the first value. kind of like a for loop. name: type DataTypes.STRING only allows for data associated with name: as a string to be returned.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    breeds: {
      type: DataTypes.JSON
    },
    colors: {
        type: DataTypes.JSON,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      photos: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.STRING,
      },
      contact: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      _links: {
        type: DataTypes.JSON,
      },
      user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animals',
  }
);

module.exports = Animals;
