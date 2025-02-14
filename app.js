const express = require('express');
const path = require('path');
const mapRoutes = require('./routes/mapRoutes');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', mapRoutes);

// Start the server

app.listen(9000, () => {
    console.log("server running")
});
