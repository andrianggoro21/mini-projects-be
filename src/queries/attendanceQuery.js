const db = require("../models");
// const { Op } = require("sequelize");
const attendance = db.attendance;

const createAttendanceQuery = async (
  ticketId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  isCancel
) => {
  try {
    const res = await attendance.create({
      ticketId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      isCancel,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAttendanceQuery,
};
