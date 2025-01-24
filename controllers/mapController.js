const path = require('path');

// Controller function for Assembly Map
const renderAssemblyMap = (req, res) => {
    try {
        const mapData = require(path.join(__dirname, '../data/madhypradesh.json'));
        res.render('index', { mapData, nextPage: '/parliament', pageTitle: 'Assembly Map' });
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
};

// Controller function for Parliament Map
const renderParliamentMap = (req, res) => {
    try {
        const mapData = require(path.join(__dirname, '../data/parliament.json'));
        res.render('index', { mapData, nextPage: '/', pageTitle: 'Parliament Map' });
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
};

module.exports = {
    renderAssemblyMap,
    renderParliamentMap,
};
