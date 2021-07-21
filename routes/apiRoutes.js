const router = require('express').Router();
const fs = require("fs");
const uniqid = require('uniqid');
const path = require('path');

let {notes} = require('../db/db.json')

function saveNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return newNote;
}

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const newNote = saveNote(req.body, notes);
    res.json(newNote)
});

module.exports = router;