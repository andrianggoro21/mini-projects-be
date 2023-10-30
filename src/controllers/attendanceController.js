const { createAttendanceService } = require("../services/attendanceService");

const createAttendanceController = async () => {
    try {
        const {fullName} = req.body
        const result = await createAttendanceService(fullName)
        return result.status(200).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        throw err
    }
}

module.exports = createAttendanceController