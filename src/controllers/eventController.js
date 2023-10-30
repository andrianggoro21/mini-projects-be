const { createEventService } = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const result = await createEventService(
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
      include
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = { createEventController };
