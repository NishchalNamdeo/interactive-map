const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController'); // Import the controller

// Define the route for the home page
router.get('/', mapController.renderMap);

// Route for region-specific map
router.get('/region/:region', mapController.renderRegionMap);

module.exports = router;
