"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Place.init(
    {
      place_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ratings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Place",
    }
  );
  return Place;
};
