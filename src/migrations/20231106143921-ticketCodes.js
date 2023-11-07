'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("ticketCodes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transactionId: {
        type: Sequelize.INTEGER,
      },
      ticketCode: {
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("ticketCodes");
  }
};
