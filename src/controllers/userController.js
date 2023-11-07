const { updatePointUserService } = require("../services/userService");


const updatePointUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const { point } = req.body;
        const result = updatePointUserService(id, point);
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message)
    }
}

module.exports = {
    updatePointUserController,
}