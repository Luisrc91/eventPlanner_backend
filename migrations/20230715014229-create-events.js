"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      guest: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      place_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_event: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
