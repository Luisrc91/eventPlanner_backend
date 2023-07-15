"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User_data extends Model {
    static associate(models) {
      
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
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
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
