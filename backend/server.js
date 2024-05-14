// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express application
const app = express();
const port = 8000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for logs
let logs = [];

// Endpoint for capturing logs
app.post('/logs', (req, res) => {
    const logData = req.body;

    // Validate log data
    if (!logData || !logData.level || !logData.log_string || !logData.timestamp) {
        return res.status(400).json({ error: 'Invalid log data' });
    }

    // Add log to in-memory storage
    logs.push(logData);
    console.log("req recieved");
    return res.status(201).json({ message: 'Log captured successfully' });

   
  
});

// Endpoint for retrieving all logs
app.get('/logs', (req, res) => {
    return res.status(200).json(logs);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

