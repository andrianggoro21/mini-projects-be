const db = require("../models");
// const { Op } = require("sequelize");
const attendance = db.attendance;
const attendanceDetail = db.attendanceDetail;

const createAttendanceQuery = async (
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
) => {
  try {
    const res = await attendance.create({
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createAttendanceDetailQuery = async (
  attendanceId,
  ticketId,
  ticketTotal,
  priceTotal
) => {
  try {
    const res = await attendanceDetail.create({
      attendanceId,
      ticketId,
      ticketTotal,
      priceTotal,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getAttendanceQueryAll = async () => {
  try {
    const res = await attendance.findAll({ include: attendanceDetail });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAttendanceQuery,
  createAttendanceDetailQuery,
  getAttendanceQueryAll,
};
