const db = require("../models");
// const { Op } = require("sequelize");
const attendance = db.attendance;
const attendanceDetail = db.attendanceDetail;

const createAttendanceQuery = async (
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode
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

const getAttendanceQueryId = async (id) => {
  try {
    const res = await attendance.findOne({
      include: attendanceDetail,
      where: {
        id,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getAttendanceDetailQueryId = async (attendanceId) => {
  try {
    const res = await attendanceDetail.findAll({
      include: db.tickets,
      where: {
        attendanceId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};



module.exports = {
  createAttendanceQuery,
  createAttendanceDetailQuery,
  getAttendanceQueryId,
  getAttendanceDetailQueryId
};
