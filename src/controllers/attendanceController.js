const {
  createAttendanceService,
  getAttendanceServiceAll,
} = require("../services/attendanceService");

const createAttendanceController = async (req, res) => {
  try {
    const {
      ticketId,
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      ticketTotal,
      priceTotal
    } = req.body;
    const result = await createAttendanceService(
      ticketId,
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      ticketTotal,
      priceTotal
    );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getAttendanceControllerAll = async (req, res) => {
  try {
    const result = await getAttendanceServiceAll();
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAttendanceController,
  getAttendanceControllerAll,
};
