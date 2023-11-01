const db = require("../models");
// const { Op } = require("sequelize");
const transaction = db.transaction;

const createTransactionQuery = async (
  attendanceId,
  ticketTotal,
  priceTotal,
  transactionStatus,
) => {
  try {
    const res = await transaction.create({
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionQuery,
};
