const express = require("express");
const { findEventController, getEventByFilterController } = require("../controllers/filterController");
const router = express.Router();

router.get("/", getEventByFilterController);
router.get("/search", findEventController);

module.exports = router;