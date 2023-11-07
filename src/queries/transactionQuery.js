const db = require("../models");
// const { Op } = require("sequelize");
const transaction = db.transaction;
const ticket = db.ticketCode;

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

const createTicketCodeQuery = async (transactionId, ticketCode) => {
  try {
    const res = await ticket.create({transactionId, ticketCode})
    return res;
  } catch (err) {
    throw err;
  }
};

// const createTotalCodeTicketQuery = async () => {
//   try {
//     const res = await 
//   } catch (err) {
//     throw err
//   }
// }

module.exports = {
  createTransactionQuery,
  createTicketCodeQuery
};
