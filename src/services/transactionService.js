const { createTransactionQuery } = require("../queries/transactionQuery");

const createTransactionService = async (
  attendanceId,
  ticketTotal,
  priceTotal,
  transactionStatus,
  referralCode
) => {
  try {
    const res = await createTransactionQuery(
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
      referralCode
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
};
