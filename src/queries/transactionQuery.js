const db = require("../models");
// const { Op } = require("sequelize");
const transaction = db.transaction;

const createTransactionQuery = async (
  attendanceId,
  ticketTotal,
  priceTotal,
  transactionStatus,
  referralCode
) => {
  try {
    const res = await transaction.create({
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
      referralCode,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionQuery,
};
