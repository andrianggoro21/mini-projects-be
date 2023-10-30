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
        type: Sequelize.STRING,
      },
      referralCode: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "transactions",
    }
  );

  transaction.associate = (models) => {
    transaction.hasOne(models.attendance, { foreignKey: "attendanceId" });
  };

  return transaction;
};
