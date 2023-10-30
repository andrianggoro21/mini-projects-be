const express = require('express');
const router = express.Router();

const { verifyToken } = require("../middleware/auth");
const { registerController, loginController, keepLoginController } = require('../controllers/authController');

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/keep-login", verifyToken, keepLoginController);

module.exports = router;
