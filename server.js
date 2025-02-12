require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDatabase = require('./database');

let dbConnectionStatus = 'Disconnected';

// Connect to MongoDB
connectDatabase()
    .then(() => {
        dbConnectionStatus = 'Connected to database';
        console.log(dbConnectionStatus);
    })
    .catch(err => {
        dbConnectionStatus = `Error connecting to database: ${err.message}`;
        console.error(dbConnectionStatus);
    });

// Route to check database connection status
app.get('/', (req, res) => {
    res.json({ message: dbConnectionStatus });
});

// Test route
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
