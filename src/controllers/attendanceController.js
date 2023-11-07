const {
  createAttendanceService,
  getAttendanceServiceId,
  createAttendanceDetailService,
  getAttendanceDetailServiceId,
  getReferralCodeService,
} = require("../services/attendanceService");

const createAttendanceController = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      pricePaid
    } = req.body;
    const result = await createAttendanceService(
      userId,
      fullName,
      email,
      phoneNumber,
      referralCode,
      pricePaid
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
    const { attendanceId, ticketId, ticketTotal, priceTotal} = req.body;
    const result = await createAttendanceDetailService(
      attendanceId,
      ticketId,
      ticketTotal,
      priceTotal,
      
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

const getReferralCodeController = async (req, res) => {
  try {
    const { referralCode } = req.params
    console.log(referralCode);
    const result = await getReferralCodeService(referralCode)
    return res.status(200).json({
      message: "success",
      data: result
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
}

module.exports = {
  createAttendanceController,
  createAttendanceDetailController,
  getAttendanceControllerId,
  getAttendanceDetailControllerId,
  getReferralCodeController
};
