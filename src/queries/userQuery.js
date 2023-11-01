const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const findUserQuery = async ({fullname = null, email = null}) => {
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

module.exports = {
    findUserQuery,
};