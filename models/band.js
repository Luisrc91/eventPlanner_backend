"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Band_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_data, Events_data}) {
      // define association here
      Band_data.belongsTo(User_data,{
        foreignKey:"user_id",
        as: "user"
      }),
      Band_data.belongsTo(Events_data,{
        foreignKey:"event_id",
        as: "event"
      })
    }
  }
  Band_data.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      event_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
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
