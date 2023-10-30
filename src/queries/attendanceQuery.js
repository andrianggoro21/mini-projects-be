const db = require("../models");
const { Op } = require("sequelize");
const attendance = db.attendance;

const createAttendanceQuery = async (fullName) => {
    try {
        const res = await attendance.create({fullName})
        return res
    } catch (err) {
        throw err
    }
}

module.exports = {
    createAttendanceQuery,
}