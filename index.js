const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./src/routes/movie-lobby.routes');
const { connectToDatabase } = require('./src/db');
const userRoutes = require('./src/routes/user.routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', movieRoutes);
app.use('/', userRoutes);

app.get("/", (request, response) => {
    response.status(200).json({
        message: "backend live",
    });
});

//if routes not found 
app.get('*', function (req, res) {
    res.status(404).json({ 'message': "Route not found" });
});
app.post('*', function (req, res) {
    res.status(404).json({ 'message': "Route not found" });
});


// error handler
app.use((err, res) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

// Connect to the database when the application starts
 connectToDatabase();

// Handle shutdown gracefully by disconnecting from the database
// process.on('SIGINT', async () => {
//     await disconnectFromDatabase();
//     process.exit(0);
// });

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;