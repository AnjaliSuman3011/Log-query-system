const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Creating an Express application
const app = express();
const port = 8000;

//ensuring the cors policcy
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for logs
let logs = [];

// Endpoint for capturing logs
app.post('/logs', (req, res) => {
    const logData = req.body;

    // Validating the log data
    if (!logData || !logData.level || !logData.log_string || !logData.timestamp) {
        return res.status(400).json({ error: 'Invalid log data' });
    }

    // Add log to in-memory storage
    logs.push(logData);
    
    return res.status(201).json({ message: 'Log captured successfully' });
});

// Endpoint for getting all logs
app.get('/logs', (req, res) => {
    return res.status(200).json(logs);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});