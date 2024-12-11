const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware/handler
});

// Route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Express App!');
});

// Route with a URL parameter
app.get('/user/:username', (req, res) => {
    const username = req.params.username; // Capture 'username' from URL
    res.send(`Hello, ${username}!`);
});

// Route that accepts query parameters
app.get('/search', (req, res) => {
    const query = req.query.q; // Capture query parameter 'q'
    res.send(query ? `You searched for: ${query}` : 'Please provide a search query.');
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

