const {
  createAttendanceQuery,
  getAttendanceQueryId,
  createAttendanceDetailQuery,
  getAttendanceDetailQueryId,
  getReferralCodeQuery,
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

const getAttendanceServiceId = async (id) => {
  try {
    const res = await getAttendanceQueryId(id);
    return res;
  } catch (err) {
    throw err;
  }
};

const getAttendanceDetailServiceId = async (attendanceId) => {
  try {
    const res = await getAttendanceDetailQueryId(attendanceId);
    return res;
  } catch (err) {
    throw err;
  }
};

const getReferralCodeService = async (referralCode) => {
  try {
    const res = await getReferralCodeQuery(referralCode);
    return res;
  } catch (err) {
    throw err
  }
}

module.exports = {
  createAttendanceService,
  createAttendanceDetailService,
  getAttendanceServiceId,
  getAttendanceDetailServiceId,
  getReferralCodeService
};
