module.exports = (sequelize, Sequelize) => {
  const ticketCode = sequelize.define(
    "ticketCode",
    {
      transactionId: {
        type: Sequelize.INTEGER,
      },
      ticketCode: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "ticketCodes",
    }
  );

  ticketCode.associate = (models) => {
    ticketCode.belongsTo(models.transaction, { foreignKey: "transactionId" });
  };

  return ticketCode;
};
