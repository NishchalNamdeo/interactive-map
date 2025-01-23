const path = require('path');

// Controller function for main map
const renderMap = (req, res) => {
    try {
        const mapData = require(path.join(__dirname, '../data/madhypradesh.json'));
        res.render('index', { mapData });
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
};

// Controller function for region-specific map
const renderRegionMap = (req, res) => {
    const regionName = req.params.region;
    try {
        // Render the specific region's page with its data
        res.render('region', { regionName });
    } catch (error) {
        console.error('Error rendering region map:', error.message);
        res.status(500).send('Error rendering region map.');
    }
    
};

module.exports = {
    renderMap,
    renderRegionMap,
};
