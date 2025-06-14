const express = require('express');
const router = express.Router();
const { getAllProvinces } = require('../controllers/provincias');

router.get('/', getAllProvinces);

module.exports = router;