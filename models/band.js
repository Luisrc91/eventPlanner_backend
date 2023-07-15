"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Band_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band_data.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
    },
    {
      sequelize,
      modelName: "Band_data",
      timestamps: false,

    }
  );
  return Band_data;
};
