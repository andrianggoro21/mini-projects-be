const { createTransactionQuery } = require("../queries/transactionQuery");

const createTransactionService = async (
  attendanceId,
  transactionStatusId,
  image,
) => {
  try {
    const res = await createTransactionQuery(
      attendanceId,
      transactionStatusId,
      image,
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
};
