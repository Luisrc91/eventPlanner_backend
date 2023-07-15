"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Places", {
      place_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },   
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      place_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      place_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ratings: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Places");
  },
};
