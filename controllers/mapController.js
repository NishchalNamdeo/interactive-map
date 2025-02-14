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
        const parliamentData = require(path.join(__dirname, '../data/parliament.json'));
        res.render('parliament', { parliamentData });
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
};



// Controller for Assembly and District Maps// Controller for Assembly and District Maps
const renderAssemblyDistrictMap = (req, res) => {
    try {
        const district = req.params.district;
        const assemblyData = require(path.join(__dirname, '../data/assembly.json'));
        const districtData = require(path.join(__dirname, '../data/district.json'));

        // Safely filter Assembly and District data by district name
        const filteredAssemblyData = {
            type: 'FeatureCollection',
            features: assemblyData.features.filter(
                (feature) =>
                    feature.properties &&
                    feature.properties.DIST_NAME &&
                    feature.properties.DIST_NAME.toLowerCase() === district.toLowerCase()
            ),
        };

        const filteredDistrictData = {
            type: 'FeatureCollection',
            features: districtData.features.filter(
                (feature) =>
                    feature.properties &&
                    feature.properties.DIST_NAME &&
                    feature.properties.DIST_NAME.toLowerCase() === district.toLowerCase()
            ),
        };

        // Check if no features are found, use default data
        if (
            filteredAssemblyData.features.length === 0 &&
            filteredDistrictData.features.length === 0
        ) {
            return res.render('assemblyDistrict', {
                district,
                assemblyData, // Send all assembly data as default
                districtData, // Send all district data as default
                errorMessage: `No data found for district: ${district}. Displaying all data.`,
            });
        }

        res.render('assemblyDistrict', {
            district,
            assemblyData: filteredAssemblyData,
            districtData: filteredDistrictData,
        });
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
};


module.exports = {
    renderAssemblyMap,
    renderParliamentMap,
    renderAssemblyDistrictMap,
};
