const db = require("../models");
// const { Op } = require("sequelize");
const events = db.events;

const createEventQuery = async (eventName, categoryId, locationId, userId, startDate, endDate, time, eventStatus, description, highlight, include) => {
    try {
        const res = await events.create({
            eventName, categoryId, locationId, userId, startDate, endDate, time, eventStatus, description, highlight, include
        });

        return res
    } catch (err) {
        throw err;
    }
}

module.exports = {createEventQuery}