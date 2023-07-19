"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  class Place_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_data, Event_data}) {
      // define association here
      Place_data.belongsTo(User_data,{
        foreignKey: "user_id",
        as:"author"
      
      })
    }
  }
  Place_data.init(
    {
      place_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },    
      user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      }, 
      place_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture_place: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ratings: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Place_data",
      timestamps: false,

    }
  );
  return Place_data;
};
