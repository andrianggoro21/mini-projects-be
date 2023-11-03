const {
  createAttendanceQuery,
  getAttendanceQueryAll,
  createAttendanceDetailQuery,
} = require("../queries/attendanceQuery");

const createAttendanceService = async (
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
) => {
  try {
    const res = await createAttendanceQuery(
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const createAttendanceDetailService = async (attendanceId, ticketId, ticketTotal, priceTotal) => {
  try {
    const res = await createAttendanceDetailQuery(attendanceId, ticketId, ticketTotal, priceTotal)
    return res;
  } catch (err) {
    throw err
  }
} 

const getAttendanceServiceAll = async () => {
  try {
    const res = await getAttendanceQueryAll();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAttendanceService,
  createAttendanceDetailService,
  getAttendanceServiceAll,
};
