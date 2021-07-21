// Require dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8008;
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to send user to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '.public/index.html')));
// Route to send user to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '.public/notes.html')));

// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));