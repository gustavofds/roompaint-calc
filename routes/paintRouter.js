const express = require('express');
const paintController = require('../controllers/paintController');

const router = express.Router();

router.post('/', paintController.calc);

module.exports = router;
