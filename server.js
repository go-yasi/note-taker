// Require express
const express = require('express');

const app = express();
const PORT = 8888;

// Spin up server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));