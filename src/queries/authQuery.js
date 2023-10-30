const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const registerQuery = async (fullname, email, password) => {
    try {
        const res = await user.create(
            {
                fullname,
                email,
                password,
                roleId : 1,
            },
        );
        console.log(res);
        return res;
    } catch (err) {
        throw err;
    }
};

const loginQuery = async ( email ) => {
    try {
       const  res = await user.findOne({
        where: {
            email,
        },
       });
       return res;
    } catch (err) {
        throw err;
    }
};

const keepLoginQuery = async (id) => {
    try {
        const res = await user.findByPk(id, {
            attributes: {
                exclude: ["password"],
            },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    registerQuery,
    loginQuery,
    keepLoginQuery,
}