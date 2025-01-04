const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the map
app.get('/', (req, res) => {
    try {
        // Load your GeoJSON data from the file
        const mapData = require('./data/madhyapradesh_PC.json'); // Adjust path if necessary
        res.render('index', { mapData }); // Pass GeoJSON data to the EJS template
    } catch (error) {
        console.error('Error loading GeoJSON data:', error.message);
        res.status(500).send('Error loading GeoJSON data.');
    }
});


app.get("/data", (req, res)=>{
    res.send("hello")
})

// Start the server
const PORT = 3000; // Port number
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
