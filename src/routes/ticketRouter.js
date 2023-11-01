const express = require("express");
const router = express.Router();

const { createTicketController, getTicketTypeController } = require("../controllers/ticketController");
const { getEventController } = require("../controllers/eventController");
router.get("/get-ticket-type", getTicketTypeController);
router.get("/get-event", getEventController);
router.post("/add-ticket", createTicketController);
// router.get("/list-ticket", getCategoryController);

module.exports = router;