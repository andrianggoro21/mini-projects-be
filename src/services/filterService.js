const {
  findEventQuery,
  getEventByFilterQuery,
} = require("../queries/filterQuery");

const findEventService = async (eventName) => {
  try {
    const res = await findEventQuery(eventName);

    return res;
  } catch (err) {
    throw err;
  }
};

const getEventByFilterService = async (
  eventName,
  categoryId,
  locationId,
  ticketTypeId
) => {
  try {
    const res = await getEventByFilterQuery({
      eventName,
      categoryId,
      locationId,
    //   ticketTypeId,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findEventService,
  getEventByFilterService,
};
