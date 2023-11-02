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
  eventId,
  ticketTypeId,
  ticketName,
  price,
  capacity,
  discount,
  maxReferral
) => {
  try {
    const res = await ticket.create({
      eventId,
      ticketTypeId,
      ticketName,
      price,
      capacity,
      discount,
      maxReferral
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const getTicketQuery = async () => {
  try {
    const res = await ticket.findAll({
      include: [  
        db.events,
        db.tickettypes,
      ]
  });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
} 

module.exports = {
  getTicketTypeQuery,
  createTicketQuery,
  getTicketQuery,
};
