'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      detailId: {
        type: Sequelize.INTEGER,
      },
      eventId: {
        type: Sequelize.INTEGER,
      },
      typeId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      discount: {
        type: Sequelize.DECIMAL,
      },
      maxReferral: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tickets");
  }
};
