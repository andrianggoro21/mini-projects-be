const { createAttendanceQuery } = require("../queries/attendanceQuery");

const createAttendanceService = async (
  ticketId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  isCancel
) => {
  try {
    const res = await createAttendanceQuery(
      ticketId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      isCancel
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAttendanceService,
};
