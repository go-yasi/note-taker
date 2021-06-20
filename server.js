// Require express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));