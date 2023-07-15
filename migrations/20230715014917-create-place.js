"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Place_data", {
      place_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },   
    
      place_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      place_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture_place: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ratings: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Places_data");
  },
};
