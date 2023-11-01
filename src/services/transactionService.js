const { createTransactionQuery } = require("../queries/transactionQuery");

const createTransactionService = async (
  attendanceId,
  ticketTotal,
  priceTotal,
  transactionStatus,
) => {
  try {
    const res = await createTransactionQuery(
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
};
