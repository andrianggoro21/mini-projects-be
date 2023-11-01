const { createTicketQuery, getTicketTypeQuery, getTicketQuery } = require("../queries/ticketQuery");

const getTicketTypeService = async () => {
    try {
        const res = await getTicketTypeQuery();
        return res;
    } catch (err) {
        throw err;
    }
}

const createTicketService = async (
  eventId,
  ticketTypeId,
  ticketName,
  price,
  capacity,
  discount,
  maxReferral
) => {
  try {
    const res = await createTicketQuery(
      eventId,
      ticketTypeId,
      ticketName,
      price,
      capacity,
      discount,
      maxReferral
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const getTicketService = async () => {
  try {
    const res = await getTicketQuery();
    return res;
  } catch (err) {
    throw err;
  }
}

module.exports = {
    getTicketTypeService,
  createTicketService,
  getTicketService,
};
