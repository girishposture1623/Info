const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms');

router.get('/', roomsController.list);
router.get('/:id', roomsController.get);

module.exports = router;
