const {
  createAttendanceQuery,
  getAttendanceQueryAll,
} = require("../queries/attendanceQuery");

const createAttendanceService = async (
  ticketId,
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  ticketTotal,
  priceTotal
) => {
  try {
    const res = await createAttendanceQuery(
      ticketId,
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      ticketTotal,
      priceTotal
    );
    return res;
  } catch (err) {
    throw err;
  }
};

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
  getAttendanceServiceAll,
};
