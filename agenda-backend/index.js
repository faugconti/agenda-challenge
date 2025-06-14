require('dotenv').config();
const express = require('express');

const app = express();

app.listen(process.env.BACKEND_PORT, () => {
    console.log('Server running at port ',process.env.BACKEND_PORT);
})