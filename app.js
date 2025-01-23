const express = require('express');
const path = require('path');
const mapRoutes = require('./routes/mapRoutes'); // Import routes

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', mapRoutes);

// Start the server
const PORT = 3000; // Port number
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
