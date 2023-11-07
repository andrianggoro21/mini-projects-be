const db = require("../models");
const { Op, Sequelize } = require("sequelize");
const user = db.user;

const findUserQuery = async ({ fullname = null, email = null }) => {
  console.log(fullname);
  console.log(email);
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          fullname,
          email,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const findUserIdQuery = async (id = null) => {
  try {
    const params = {};
    if (id) params.id = id;
    const res = await user.findOne({
      where: {
        ...params,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const updateUserQuery = async (id, point) => {
    try {
    //   const res = await user.increment("point", {
    //     by: point,
    //     where: {
    //       id,
    //     },
    //   });
      const res = await user.update(
        {
          point: Sequelize.literal(`point + ${point}`),
        },
        {
          where: {
            id: id,
          },
        }
      );
    console.log(res);
      return res;
    } catch (err) {
      throw err;
    }
  };

module.exports = {
  findUserQuery,
  findUserIdQuery,
  updateUserQuery,
};
