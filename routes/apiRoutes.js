// const router = require('express').Router();

// const uniqid = require('uniqid');

// let { notes } = require('../db/db.json');
// let notesArray = [];

// function createNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, "../db/db.json"),
//       JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return note;
// }

// router.get("/api/notes", (req, res) => {
//     res.json(notes);
// });

// router.post("/api/notes", (req, res) => {
//     req.body.id = uniqid();
//     const note = createNote(req.body , notes);
//     res.json(note)
// });

// module.exports = router;
