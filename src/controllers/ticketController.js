const {
  createTicketService, getTicketTypeService,
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
}

const createTicketController = async (req, res) => {
  try {
    const { detailId, eventId, typeId, userId, discount, maxReferral } =
      req.body;
    const result = await createTicketService(
      detailId,
      eventId,
      typeId,
      userId,
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

module.exports = {
    getTicketTypeController,
  createTicketController,
};
