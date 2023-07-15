"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band.init(
    {
      band_id: DataTypes.INTEGER,
      band_name: DataTypes.STRING,
      genre: DataTypes.STRING,
      event_place: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Band",
    }
  );
  return Band;
};
