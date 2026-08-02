const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');

// simple health
router.get('/', (req, res) => res.json({ ok: true }));

// auth
const authRoutes = require('./routes/auth');
const roomRoutes = require('./routes/rooms');
const bookingRoutes = require('./routes/bookings');

router.use('/auth', authRoutes);
router.use('/rooms', roomRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;
