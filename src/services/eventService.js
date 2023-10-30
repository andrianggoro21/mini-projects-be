const { createEventQuery } = require("../queries/eventQuery");

const createEventService = async (eventName, categoryId, locationId, userId, startDate, endDate, time, eventStatus, description, highlight, include) => {
    try {
        const res = await createEventQuery(eventName, categoryId, locationId, userId, startDate, endDate, time, eventStatus, description, highlight, include);
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {createEventService}