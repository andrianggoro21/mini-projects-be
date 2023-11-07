const {
  findEventService,
  getEventByFilterService,
} = require("../services/filterService");

const findEventController = async (req, res) => {
  try {
    const { eventName } = req.query;
    const result = await findEventService(eventName);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getEventByFilterController = async (req, res) => {
  try {
    const { eventName, category, location, ticketType } = req.query;

    const data = await getEventByFilterService(
      eventName,
      category,
      location,
      // ticketType
    );

    return res.status(200).json({
      message: "Success",
      data: data,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  findEventController,
  getEventByFilterController,
};
