// Require dependencies
const express = require('express');
const path = require('path');
// Require API routes
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 8008;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use API routes
app.use('/api',apiRoutes);

// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));