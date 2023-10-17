const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Message extends Model {
 
}

Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type:DataTypes.STRING,
          allowNull: false,       
      },
      message: {
          type:DataTypes.STRING,
          allowNull: false,       
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          }
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'message',
    }
  )
  

module.exports = Message