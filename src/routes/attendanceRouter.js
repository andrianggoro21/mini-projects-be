const express = require("express");
const router = express.Router();
const { createAttendanceController, getAttendanceControllerAll } = require("../controllers/attendanceController");

router.post("/", createAttendanceController);
router.get("/", getAttendanceControllerAll);

module.exports = router;