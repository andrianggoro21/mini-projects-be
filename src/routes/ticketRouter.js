const express = require("express");
const router = express.Router();

const { createTicketController, getTicketTypeController, getTicketController } = require("../controllers/ticketController");
const { getEventController } = require("../controllers/eventController");
router.get("/get-ticket-type", getTicketTypeController);
router.get("/get-event", getEventController);
router.post("/add-ticket", createTicketController);
router.get("/list-ticket", getTicketController);

module.exports = router;