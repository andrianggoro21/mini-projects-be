const {
  createAttendanceService,
  getAttendanceServiceId,
  createAttendanceDetailService,
  getAttendanceDetailServiceId,
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

const getAttendanceControllerId = async (req, res) => {
  try {
    const { id } = req.params
    const result = await getAttendanceServiceId(id);
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const getAttendanceDetailControllerId = async (req, res) => {
  try {
    const { attendanceId } = req.params
    const result = await getAttendanceDetailServiceId(attendanceId);
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
  getAttendanceControllerId,
  getAttendanceDetailControllerId
};
