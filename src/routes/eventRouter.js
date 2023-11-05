const express = require("express");
const router = express.Router();

const { uploadEventFile } = require("../middleware/multer");

const { createEventController, getCategoryController, getLocationController, getEventController, getEventControllerId } = require("../controllers/eventController");

router.get("/list-category", getCategoryController);
router.get("/list-location", getLocationController);
router.post("/add-event", uploadEventFile, createEventController);
router.get("/list-event", getEventController);
router.get("/:id", getEventControllerId);

module.exports = router;