const Booking = require('../models/Booking');

exports.create = async (req, res) => {
  try {
    const { room, user, startDate, endDate } = req.body;
    const b = await Booking.create({ room, user, startDate, endDate });
    res.json(b);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.list = async (req, res) => {
  try {
    const list = await Booking.find().populate('room');
    res.json(list);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
