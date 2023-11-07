module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define(
    "transaction",
    {
      attendanceId: {
        type: Sequelize.INTEGER,
      },
      transactionStatusId: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "transactions",
    }
  );

  transaction.associate = (models) => {
    transaction.belongsTo(models.attendance, { foreignKey: "attendanceId" });
    transaction.hasMany(models.ticketCode, {foreignKey: "transactionId"})
  };

  return transaction;
};
