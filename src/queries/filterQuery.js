const db = require("../models");
const { Op, Sequelize } = require("sequelize");
const category = db.eventcategory;
const location = db.eventlocation;
const events = db.events;
const tickets = db.tickets;

const findEventQuery = async (eventName = null) => {
  try {
    const filter = {};
    if (eventName)
      filter.where = {
        eventName: {
          [Op.like]: `%${eventName}%`,
        },
      };
    const res = await events.findAll({
      ...filter,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getEventByFilterQuery = async ({
  eventName = null,
  categoryId = null,
  locationId = null,
//   ticketTypeId = null,
}) => {
  try {
    const filter = {};
    if (eventName) {
        filter.eventName = {[Op.like]: `%${eventName}%`}
    }

    if (categoryId && categoryId !== "undefined") {
      filter.categoryId = categoryId;
    }

    if (locationId && locationId !== "undefined") {
      filter.locationId = locationId;
    }

    // if (ticketTypeId && ticketTypeId !== "undefined") {
    //     filter.ticketTypeId = ticketTypeId;
    // }
    console.log(filter);
    const res = await events.findAll({
      include: [
        db.eventlocation,
        db.eventcategory,
        { model: db.tickets, include: [db.tickettypes] },
      ],
      where: {
        ...filter,
      },
    });

    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findEventQuery,
  getEventByFilterQuery,
};
