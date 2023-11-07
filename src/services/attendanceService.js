const {
  createAttendanceQuery,
  getAttendanceQueryId,
  createAttendanceDetailQuery,
  getAttendanceDetailQueryId,
  getReferralCodeQuery,
  updateCapacityTicket,
} = require("../queries/attendanceQuery");

const createAttendanceService = async (
  userId,
  fullName,
  email,
  phoneNumber,
  referralCode,
  pricePaid
) => {
  try {
    const res = await createAttendanceQuery(
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      pricePaid
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

const updateTicketCapacityService = async (attendanceId) => {
  try {
    const res = await getAttendanceDetailQueryId(attendanceId)
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].capacity)
      const x = await updateCapacityTicket(res[i].ticketId, res[i].ticketTotal)
      
    }
  } catch (err) {
    throw err
  }
}
module.exports = {
  createAttendanceService,
  createAttendanceDetailService,
  getAttendanceServiceId,
  getAttendanceDetailServiceId,
  getReferralCodeService,
  updateTicketCapacityService
};
