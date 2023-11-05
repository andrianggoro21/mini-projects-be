const express = require("express");
const router = express.Router();
const { createAttendanceController, getAttendanceControllerId, createAttendanceDetailController, getAttendanceDetailControllerId } = require("../controllers/attendanceController");

router.post("/", createAttendanceController);
router.get("/:id", getAttendanceControllerId);
router.post("/detail", createAttendanceDetailController);
router.get("/detail/:attendanceId", getAttendanceDetailControllerId);

module.exports = router;