const db = require("../models");
// const { Op } = require("sequelize");
const transaction = db.transaction;

const createTransactionQuery = async (
  attendanceId,
  transactionStatusId,
  image,
) => {
  try {
    const res = await transaction.create({
      attendanceId,
      transactionStatusId,
      image,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionQuery,
};
