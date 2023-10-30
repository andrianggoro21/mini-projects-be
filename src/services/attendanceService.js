const { createAttendanceQuery } = require("../queries/attendanceQuery");

const createAttendanceService = async (fullName) => {
    try {
        const res = await createAttendanceQuery(fullName)
        return res
    } catch (err) {
        throw err
    }
}

module.exports = {
    createAttendanceService
}