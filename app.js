const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();

const port = 3000;

// connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongodb atlas");
    }).catch(error => {
        console.log(error.message);
    });

// start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});