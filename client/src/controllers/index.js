var express = require('express');
var router = express.Router();
var films = require('../models/films')

router.use('/api/films', require('./films'));

module.exports = router;
