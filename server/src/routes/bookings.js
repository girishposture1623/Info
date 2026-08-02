const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// create booking
router.post('/', async (req, res) => {
  try {
    const { room, user, startDate, endDate } = req.body;
    const b = await Booking.create({ room, user, startDate, endDate });
    res.json(b);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/', async (req, res) => {
  const list = await Booking.find().populate('room');
  res.json(list);
});
module.exports = router;
