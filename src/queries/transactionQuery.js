const db = require("../models");
// const { Op } = require("sequelize");
const transaction = db.transaction;

const createTransactionQuery = async (
  attendanceId,
  transactionStatusId
) => {
  try {
    const res = await transaction.create({
      attendanceId,
      transactionStatusId
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionQuery,
};
