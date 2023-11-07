const express = require('express');
const router = express.Router();

// const { param, body, query } = require("express-validator");
// const validator = require("../middleware/validator")
const { verifyToken } = require("../middleware/auth");
const { registerController, loginController, keepLoginController, updateAvatarController } = require('../controllers/authController');

const {uploadAvatarFile} = require("../middleware/multer")

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/keep-login", verifyToken, keepLoginController);
router.patch("/update-avatar", uploadAvatarFile, updateAvatarController);
// router.patch("/register", validator([param("id").isInt()]), registerController)

module.exports = router;
