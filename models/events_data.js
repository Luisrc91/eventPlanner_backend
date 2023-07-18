"use strict";
const { Model, DataTypes } = require("sequelize");
// const sequelize = require('../config/database');


module.exports = (sequelize) =>{
  class Events_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_data, Place_data, Band_data}) {
      // define association here
      Events_data.belongsTo(User_data,{
        foreignKey: 'user_id',
        as: 'author'
      }),
      Events_data.hasOne(Place_data,{
        foreignKey: 'event_id',
        as: 'place'
      }),
      Events_data.hasMany(Band_data,{
        foreignKey: 'event_id',
        as: 'band'
      })
    }
  }
  Events_data.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guest: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      place_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_of_event: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Events_data",
      timestamps: false,
    }
  );
  return Events_data;
};
