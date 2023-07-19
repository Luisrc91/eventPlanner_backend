"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Band_data", {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      band_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Band_data");
  },
};
