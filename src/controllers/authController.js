const { registerService, loginService, keepLoginService,
} = require("../services/authService");

const registerController = async (req, res) => {
    try {
        const { fullname, email, password, roleId } = req.body;
        const result = await registerService(fullname, email, password, roleId);
        return res.status(200).json({
            message: "Successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await loginService(email, password);

        return res.status(200).json({
            message: "Successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).send("data yang dimasukkan salah");
    }
};

const keepLoginController = async (req, res) => {
    try {
        const { id } = req.user;
        const result = await keepLoginService(id);

        return res.status(200).json({
            message: "Successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).send("err.message");
    }
};

module.exports = {
    registerController,
    loginController,
    keepLoginController,
};