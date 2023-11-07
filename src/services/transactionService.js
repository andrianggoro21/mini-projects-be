const { createTransactionQuery, createTicketCodeQuery } = require("../queries/transactionQuery");

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

const createTicketCodeService = async (transactionId, ticketCode) => {
  try {

    const res = await createTicketCodeQuery(transactionId, ticketCode)
    return res;
  } catch (err) {
    throw err
  }
}

module.exports = {
  createTransactionService,
  createTicketCodeService
};
