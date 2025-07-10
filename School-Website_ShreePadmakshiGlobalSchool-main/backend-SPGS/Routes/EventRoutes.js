const express = require('express');
const router = express.Router();
const { createEvent, getEventByDate } = require('../controllers/EventController');
const { getAllEvents } = require('../controllers/EventController');

router.post("/",createEvent);
router.get("/:date",getEventByDate);
router.get("/", getAllEvents);

module.exports = router;