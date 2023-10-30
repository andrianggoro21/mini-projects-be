const express = require('express');
const { registerController, loginController, keepLoginController } = require('../controllers/authController');
const router = express.Router();

// const { verifyToken } = require("../middleware/auth");

// router.post("/login", loginController);
router.post("/register", registerController);
// router.get("/keep-login", verifyToken, keepLoginController);

module.exports = router;
