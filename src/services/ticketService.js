const { createTicketQuery, getTicketTypeQuery } = require("../queries/ticketQuery");

const getTicketTypeService = async () => {
    try {
        const res = await getTicketTypeQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

const createTicketService = async (
  detailId,
  eventId,
  typeId,
  userId,
  discount,
  maxReferral
) => {
  try {
    const res = await createTicketQuery(
      detailId,
      eventId,
      typeId,
      userId,
      discount,
      maxReferral
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
    getTicketTypeService,
  createTicketService,
};
