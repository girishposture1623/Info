const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});
router.get('/:id', async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (!room) return res.status(404).json({ message: 'Not found' });
  res.json(room);
});
module.exports = router;
