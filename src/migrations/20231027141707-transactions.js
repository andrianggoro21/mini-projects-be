'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attendanceId: {
        type: Sequelize.INTEGER,
      },
      ticketTotal: {
        type: Sequelize.INTEGER,
      },
      priceTotal: {
        type: Sequelize.DECIMAL,
      },
      transactionStatus: {
        type: Sequelize.STRING,
      },
      referralCode: {
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("transactions");
  }
};
