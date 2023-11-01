const express = require("express");
const router = express.Router();

const { createEventController, getCategoryController, getLocationController, getEventController } = require("../controllers/eventController");
router.post("/add-event", createEventController);
router.get("/list-category", getCategoryController);
router.get("/list-location", getLocationController);
router.get("/list-event", getEventController);

module.exports = router;