const {
  createTicketService,
  getTicketTypeService,
  getTicketService,
} = require("../services/ticketService");

const getTicketTypeController = async (req, res) => {
  try {
    const result = await getTicketTypeService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createTicketController = async (req, res) => {
  try {
    const {
      eventId,
      ticketTypeId,
      ticketName,
      price,
      capacity,
      discount,
      maxReferral,
    } = req.body;
    const result = await createTicketService(
      eventId,
      ticketTypeId,
      ticketName,
      price,
      capacity,
      discount,
      maxReferral
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

const getTicketController = async (req, res) => {
  try {
    const result = await getTicketService();
    return res.status(200).json({
      message: "success",
      data: result,
    })
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getTicketTypeController,
  createTicketController,
  getTicketController,
};
