const db = require("../models");
const { Op, Sequelize } = require("sequelize");
const category = db.eventcategory;
const location = db.eventlocation;
const events = db.events;

const createEventQuery = async (
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
  image,
) => {
  try {
    const res = await events.create({
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
      image,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const getCategoryQuery = async () => {
  try {
    const res = await category.findAll();
    return res;
  } catch (err) {
    throw err;
  }
};

const getLocationQuery = async () => {
  try {
    const res = await location.findAll();
    return res;
  } catch (err) {
    throw err;
  }
};

const getEventQuery = async () => {
  try {
    // const filter = {};
    // if (eventName) filter.where = {
    //     eventName: {
    //         [Op.like]: `%${eventName}%`
    //     }
    // }

    const res = await events.findAll({
      // include: [
      //     {
      //         model: db.eventlocation,
      //     },
      //     {
      //         model: db.eventcategory,
      //     }
      // ]

      include: [db.eventlocation, db.eventcategory, db.tickets],
      // ...filter,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const getCarouselQuery = async () => {
  try {
    // const filter = {};
    // if (eventName) filter.where = {
    //     eventName: {
    //         [Op.like]: `%${eventName}%`
    //     }
    // }

    const res = await events.findAll(
      {
        attributes: ['id', 'image', 'eventStatus'],
        where: {
          [Op.and]: [
            {eventStatus: true}
          ]
        },
        order: Sequelize.literal('rand()'),
        limit: 5,
      }
    );
 
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventQuery,
  getCategoryQuery,
  getLocationQuery,
  getEventQuery,
  getCarouselQuery,
};
