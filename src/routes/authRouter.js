const express = require('express');
const router = express.Router();

// const { param, body, query } = require("express-validator");
// const validator = require("../middleware/validator")

const { verifyToken } = require("../middleware/auth");
const { registerController, loginController, keepLoginController } = require('../controllers/authController');
const { updatePointUserController } = require('../controllers/userController');

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/keep-login", verifyToken, keepLoginController);
// router.patch("/register", validator([param("id").isInt()]), registerController)

router.patch("/point/:id", updatePointUserController)

module.exports = router;
