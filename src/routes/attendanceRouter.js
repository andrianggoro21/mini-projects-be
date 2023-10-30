const express = require("express");
const router = express.Router();
const { createAttendanceController } = require("../controllers/attendanceController");

router.post("/", createAttendanceController)

module.exports = router;