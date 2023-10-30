const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const findUserQuery = async ({email = null, fullname = null }) => {
try {
    const res = await user.findOne({
        where: {
            [Op.or]: {
                email,
                fullname,
            }, 
        },
    });

    return res;
} catch (err) {
    throw err;
}
};

module.exports = {
    findUserQuery,
};