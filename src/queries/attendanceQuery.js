const db = require("../models");
const { Op, Sequelize} = require("sequelize");
const attendance = db.attendance;
const attendanceDetail = db.attendanceDetail;
const ticket = db.tickets;

const createAttendanceQuery = async (
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  pricePaid
) => {
  try {
    const res = await attendance.create({
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      pricePaid
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
  priceTotal, 
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

const updateCapacityTicket = async (ticketId, ticketTotal) => {
  try {
    const res = await ticket.update({capacity: Sequelize.literal(`capacity - ${ticketTotal}`)},
    {where: {
      id: ticketId,
      capacity: {
        [Sequelize.Op.gt]: 0
      }
    }},
    )
    return res;
  } catch (err) {
    throw err
  }
}

const getReferralCodeQuery = async (referralCode) => {
  try {
    
    const res = await attendance.findOne({
      where: {
        referralCode
      }
    })
    console.log(res);
    return res;
  } catch (err) {
    throw err
  }
}



module.exports = {
  createAttendanceQuery,
  createAttendanceDetailQuery,
  getAttendanceQueryId,
  getAttendanceDetailQueryId, 
  getReferralCodeQuery,
  updateCapacityTicket
};
