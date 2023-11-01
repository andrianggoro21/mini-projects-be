const db = require("../models");
// const { Op } = require("sequelize");
const ticket = db.tickets;
const ticketType = db.tickettypes;

const getTicketTypeQuery = async () => {
    try {
        const res = await ticketType.findAll();
        return res;
    } catch (err){
        throw err;
    }
}

const createTicketQuery = async (
  detailId,
  eventId,
  typeId,
  userId,
  discount,
  maxReferral
) => {
  try {
    const res = await ticket.create({
      detailId,
      eventId,
      typeId,
      userId,
      discount,
      maxReferral,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getTicketTypeQuery,
  createTicketQuery,
};
