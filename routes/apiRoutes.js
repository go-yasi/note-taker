const router = require('express').Router();
const fs = require("fs");

let notes = require('../db/db.json')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = notes.length.toString();

    notes.push(newNote);
    fs.writeFile('../db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

module.exports = router;