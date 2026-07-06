const express = require('express');
const router = express.Router();
const { createEvent, getEventByDate, getAllEvents, updateEvent, deleteEvent } = require('../controllers/EventController');
const { protect, isAdmin } = require('../middleware/auth');

router.post("/", protect, isAdmin, createEvent);
router.get("/:date", getEventByDate);
router.get("/", getAllEvents);
router.put("/:id", protect, isAdmin, updateEvent);
router.delete("/:id", protect, isAdmin, deleteEvent);

module.exports = router;