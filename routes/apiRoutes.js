const router = require('express').Router();


app.get('/notes', (req, res) => {
    res.json(notes);
});

module.exports = router;