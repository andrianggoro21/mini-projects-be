const express = require("express");
const router = express.Router();
const {
  createAttendanceController,
  getAttendanceControllerId,
  createAttendanceDetailController,
  getAttendanceDetailControllerId,
  getReferralCodeController,
} = require("../controllers/attendanceController");

router.post("/", createAttendanceController);
router.get("/:id", getAttendanceControllerId);
router.post("/detail", createAttendanceDetailController);
router.get("/detail/:attendanceId", getAttendanceDetailControllerId);
router.get("/code/referral/:referralCode", getReferralCodeController);

module.exports = router;
