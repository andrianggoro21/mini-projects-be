const { findUserQuery, findUserIdQuery, updateUserQuery } = require("../queries/userQuery");

const updatePointUserService = async (id, point) => {
    try {
        const check = await findUserIdQuery(id);
        console.log(check);
        if (!check) throw new Error("id doenst exist");
        const res = await updateUserQuery(id, point);
        // console.log(res);
        return res;
    } catch (err) {
        throw err
    }
}

module.exports = {
    updatePointUserService,
}