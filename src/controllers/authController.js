const { registerService, loginService, keepLoginService,
} = require("../services/authService");

const registerController = async (req, res) => {
    try {
        const { email, fullname, password } = req.body;

        const result = await registerService(email, fullname, password);
         console.log(email);
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
        return res.status(500).send("err.message");
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