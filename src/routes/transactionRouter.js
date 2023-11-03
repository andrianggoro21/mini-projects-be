const express = require("express");
const router = express.Router();

const { createTransactionController } = require("../controllers/transactionController");
const { uploadPaymentFile } = require("../middleware/multer");


router.post("/", uploadPaymentFile, createTransactionController)

module.exports = router;