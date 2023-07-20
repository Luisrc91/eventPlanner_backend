"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User_data extends Model {
    static associate({ Events_data, Place_data, Band_data }) {
      User_data.hasMany(Events_data, {
        foreignKey: "user_id",
        as: "event",
      })
        // User_data.hasMany(Place_data, {
        //   foreignKey: "place_id",
        //   as: "places",
        // }),
        // User_data.hasMany(Band_data, {
        //   foreignKey: "band_id",
        //   as: "bands",
        // });
    }
  }

  User_data.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password_digest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User_data",
      timestamps: false,
    }
  );

  return User_data;
};
