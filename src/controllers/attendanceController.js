const { createAttendanceService } = require("../services/attendanceService");

const createAttendanceController = async (req, res) => {
    try {
        const { ticketId, fullName, email, phoneNumber, referralCode, isCancel } = req.body
        const result = await createAttendanceService(ticketId, fullName, email, phoneNumber, referralCode, isCancel)
        return res.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        throw err
    }
}

module.exports = {
    createAttendanceController
} 