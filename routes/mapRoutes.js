const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

// Define routes
router.get('/', mapController.renderAssemblyMap); // Route for Assembly Map
router.get('/parliament', mapController.renderParliamentMap); // Route for Parliament Map
router.get('/assembly/:district', mapController.renderAssemblyDistrictMap);

module.exports = router;
