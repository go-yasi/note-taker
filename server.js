// Require dependencies
const express = require('express');
const path = require('path');
const fs = require("fs");

// Require API routes
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8008;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use API routes
// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

// Route to send user to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
// Route to send user to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// Route to get notes
app.get('/api/notes', (req, res) => {
    var notes;
    fs.readFile('db/db.json', 'utf8', (error, data) => {
        error ? console.error(error) : notes = JSON.parse(data);
        console.log(notes);
        res.json(notes);
    });
});

// Route to post new note
app.post('/api/notes', (req, res) => {
    var notes;
    var note = req.body;
    fs.readFile('db/db.json', 'utf8', (error, data) => {
        error ? console.error(error) : notes =JSON.parse(data);
        notes.push(note);
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => 
        err ? console.error(err) : res.json(notes));
    });
});

// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));