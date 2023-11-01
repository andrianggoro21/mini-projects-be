module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define(
    "transaction",
    {
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
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: false,
      tableName: "transactions",
    }
  );

  transaction.associate = (models) => {
    transaction.belongsTo(models.attendance, { foreignKey: "attendanceId" });
  };

  return transaction;
};
