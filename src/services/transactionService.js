const { createTransactionQuery } = require("../queries/transactionQuery");

const createTransactionService = async (
  attendanceId,
  transactionStatusId
) => {
  try {
    const res = await createTransactionQuery(
      attendanceId,
      transactionStatusId
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
};
