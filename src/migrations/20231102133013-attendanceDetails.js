'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("attendanceDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attendanceId: {
        type: Sequelize.INTEGER,
      },
      ticketId: {
        type: Sequelize.INTEGER,
      },
      ticketTotal: {
        type: Sequelize.INTEGER,
      },
      priceTotal: {
        type: Sequelize.DECIMAL,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("attendanceDetails");
  }
};
