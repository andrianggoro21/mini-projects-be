const {
  createEventQuery,
  getCategoryQuery,
  getLocationQuery,
  getEventQuery,
  getEventQueryId,
} = require("../queries/eventQuery");

const createEventService = async (
  eventName,
  categoryId,
  locationId,
  userId,
  startDate,
  endDate,
  time,
  eventStatus,
  description,
  highlight,
  include,
  image,
) => {
  try {
    const res = await createEventQuery(
      eventName,
      categoryId,
      locationId,
      userId,
      startDate,
      endDate,
      time,
      eventStatus,
      description,
      highlight,
      include,
      image,
      );
    return res;
  } catch (err) {
    throw err;
  }
};

const getCategoryService = async () => {
  try {
    const res = await getCategoryQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getLocationService = async () => {
  try {
    const res = await getLocationQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getEventService = async () => {
  try {
    const res = await getEventQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getEventServiceId = async (id) => {
  try {
    const res = await getEventQueryId(id)
    console.log(res);
    return res
  } catch (err) {
    throw err
  }
}

module.exports = {
  createEventService,
  getCategoryService,
  getLocationService,
  getEventService,
  getEventServiceId
};
