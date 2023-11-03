const express = require("express");
const router = express.Router();
const { createAttendanceController, getAttendanceControllerAll, createAttendanceDetailController } = require("../controllers/attendanceController");

router.post("/", createAttendanceController);
router.get("/", getAttendanceControllerAll);
router.post("/detail", createAttendanceDetailController);

module.exports = router;