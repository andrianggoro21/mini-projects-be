const { createTransactionService } = require("../services/transactionService");

const createTransactionController = async (req, res) => {
  try {
    const {
      attendanceId,
      transactionStatusId
    } = req.body;
    const result = await createTransactionService(
      attendanceId,
      transactionStatusId
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
