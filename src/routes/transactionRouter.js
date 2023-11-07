const express = require("express");
const router = express.Router();

const { createTransactionController, createTicketCodeController, updateTicketCapacityController } = require("../controllers/transactionController");
const { uploadPaymentFile } = require("../middleware/multer");


router.post("/", uploadPaymentFile, createTransactionController)
router.post("/ticket", createTicketCodeController)
router.patch("/capacity/:attendanceId", updateTicketCapacityController)

module.exports = router;