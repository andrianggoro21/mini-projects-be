const { createTransactionService } = require("../services/transactionService");

const createTransactionController = async (req, res) => {
  try {
    const {
      attendanceId,
      transactionStatusId
    } = req.body;
    const result = await createTransactionService(
      attendanceId,
      transactionStatusId,
      req.file?.filename,
    );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createTransactionController,
};
