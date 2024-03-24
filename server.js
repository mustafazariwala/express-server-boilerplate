// Add Environment Variables from the .env file to the process 
require('dotenv').config();
// Creating port value from the environment variable or default value
const PORT = process.env.PORT || 3000;

// Initializing express server 
const express = require("express");
const app = express();

// Middleware to parse the incoming request data as Json Objects
app.use(express.json());

// Import Routes from different folders
app.use('/api', require('./routes/index'))

// Listen to the port value and log the port value
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));