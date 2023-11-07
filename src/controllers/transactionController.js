const { updateTicketCapacityService } = require("../services/attendanceService");
const { createTransactionService, createTicketCodeService } = require("../services/transactionService");

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

const createTicketCodeController = async (req, res) => {
  try {
    const { transactionId, ticketCode } = req.body
    const result = await createTicketCodeService(transactionId, ticketCode)
    return res.status(200).json({
      message: "success",
      data: result
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
}

const updateTicketCapacityController = async (req, res) => {
  try {
    const { attendanceId } = req.params
    await updateTicketCapacityService(attendanceId);
    return res.status(200).json({
      message: "success"
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
}

module.exports = {
  createTransactionController,
  createTicketCodeController,
  updateTicketCapacityController
};
