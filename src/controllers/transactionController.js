const { createTransactionService } = require("../services/transactionService");

const createTransactionController = async (req, res) => {
  try {
    const {
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
      referralCode,
    } = req.body;
    const result = await createTransactionService(
      attendanceId,
      ticketTotal,
      priceTotal,
      transactionStatus,
      referralCode
    );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionController,
};
