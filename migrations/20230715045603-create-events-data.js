"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events_data", {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },

      event_name: {
        type: Sequelize.STRING,
      },
      event_type: {
        type: Sequelize.STRING,
      },
      guest: {
        type: Sequelize.INTEGER,
      },
      place_name: {
        type: Sequelize.STRING,
      },
      date_of_event: {
        type: Sequelize.DATE,
      },
      start_time: {
        type: Sequelize.TIME,
      },
      end_time: {
        type: Sequelize.TIME,
      },
      description: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.BLOB,
      },
      band_name: {
        type: Sequelize.STRING,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events_data");
  },
};
