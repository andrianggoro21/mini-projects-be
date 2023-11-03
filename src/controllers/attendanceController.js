const {
  createAttendanceService,
  getAttendanceServiceAll,
  createAttendanceDetailService,
} = require("../services/attendanceService");

const createAttendanceController = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
    } = req.body;
    const result = await createAttendanceService(
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
    );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const createAttendanceDetailController = async (req, res) => {
  try {
    const { attendanceId, ticketId, ticketTotal, priceTotal } = req.body;
    const result = await createAttendanceDetailService(
      attendanceId,
      ticketId,
      ticketTotal,
      priceTotal
    );
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
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
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createAttendanceController,
  createAttendanceDetailController,
  getAttendanceControllerAll,
};
