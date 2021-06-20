// Require express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to send user to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// Route to send user to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));