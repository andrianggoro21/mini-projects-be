const {
  createEventService,
  getCategoryService,
  getLocationService,
  getEventService,
  getEventServiceId,
} = require("../services/eventService");

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
      include,
      req.file?.filename,
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

const getCategoryController = async (req, res) => {
  try {
    const result = await getCategoryService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getLocationController = async (req, res) => {
  try {
    const result = await getLocationService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getEventController = async (req, res) => {
  try {
    const result = await getEventService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getEventControllerId = async (req, res) => {
  try {
    const { id } = req.params
    const result = await getEventServiceId(id)
    return res.status(200).json({
      message: "success",
      data: result
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
}

module.exports = {
  createEventController,
  getCategoryController,
  getLocationController,
  getEventController,
  getEventControllerId
};
