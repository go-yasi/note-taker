const router = require('express').Router();
const path = require('path');

// Route to send user to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '.public/index')));
// Route to send user to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '.public/notes')));

module.exports = router;