const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get("/", apiController.home)
router.get("/countries", apiController.getAllCountries)
router.get("/countries/:name", apiController.getCountry)

module.exports = router;