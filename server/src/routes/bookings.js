const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings');

router.post('/', bookingsController.create);
router.get('/', bookingsController.list);

module.exports = router;
