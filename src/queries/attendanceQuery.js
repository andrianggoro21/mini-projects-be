const db = require("../models");
// const { Op } = require("sequelize");
const attendance = db.attendance;

const createAttendanceQuery = async (
  ticketId,
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  isCancel
) => {
  try {
    const res = await attendance.create({
      ticketId,
      userId,
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

const getAttendanceQueryAll = async () => {
  try {
    const res = await attendance.findAll({include: db.transaction})
    return res
  } catch (err) {
    throw err
  }
}

module.exports = {
  createAttendanceQuery,
  getAttendanceQueryAll
};
