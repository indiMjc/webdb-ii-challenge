const express = require('express');

const router = express.Router();

const CarsDb = require('../data/dbConfig');

router.use(express.json());

module.exports = router;
